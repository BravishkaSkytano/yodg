#!/usr/bin/env bash

# ============================================================
# Trilium → Static HTML → Git Publisher
# ============================================================
#
# LIVE COPY:
#   This copy contains the Trilium API token.
#   Keep it on the Proxmox server only.
#
# GIT BACKUP:
#   The copy committed to Git should have Token="".
#
# ============================================================

set -e

# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------

TriliumUrl=""
Repo=""

# ------------------------------------------------------------
# SECURITY
# ------------------------------------------------------------
#
# Put the actual token ONLY in the live copy on Proxmox.
#
# Before committing this script to Git, make sure this is:
#
# Token=""
#
Token=""

# ------------------------------------------------------------
# Files to preserve
# ------------------------------------------------------------

Preserve=(
    ".git"
    ".gitignore"
    ".gitattributes"
    "README.md"
    "favicon.ico"
    "export.sh"
)

# ------------------------------------------------------------
# Temporary files
# ------------------------------------------------------------

ExportZip="$HOME/TriliumExportTemp.zip"
ExportDir="$HOME/TriliumExportTemp"

# ============================================================
# START
# ============================================================

echo ""
echo "========================================"
echo " Trilium → Git Publisher"
echo "========================================"
echo ""

# ------------------------------------------------------------
# Validate configuration
# ------------------------------------------------------------

if [[ -z "$Token" ]]; then
    echo "ERROR: Trilium API token is not configured." >&2
    echo "Add the token to the live copy of export.sh." >&2
    exit 1
fi

if [[ ! -d "$Repo" ]]; then
    echo "ERROR: Git repository not found:"
    echo "  $Repo"
    exit 1
fi

# ------------------------------------------------------------
# Test Trilium connection
# ------------------------------------------------------------

echo "Checking Trilium connection..."

curl \
    --fail \
    --silent \
    --show-error \
    -H "Authorization: $Token" \
    "$TriliumUrl/etapi/app-info" \
    > /dev/null

echo "Trilium connection OK."

# ------------------------------------------------------------
# Clean up previous temporary export
# ------------------------------------------------------------

rm -f "$ExportZip"
rm -rf "$ExportDir"

# ------------------------------------------------------------
# Download Trilium static HTML export
# ------------------------------------------------------------

echo "Exporting Trilium notebook..."

curl \
    --fail \
    --silent \
    --show-error \
    -H "Authorization: $Token" \
    "$TriliumUrl/etapi/notes/root/export?format=share" \
    -o "$ExportZip"

echo "Export downloaded."

# ------------------------------------------------------------
# Extract export
# ------------------------------------------------------------

echo "Extracting export..."

mkdir -p "$ExportDir"
unzip -q "$ExportZip" -d "$ExportDir"

# ------------------------------------------------------------
# Validate export
# ------------------------------------------------------------

if [[ ! -f "$ExportDir/index.html" ]]; then
    echo "ERROR: Export validation failed."
    echo "index.html was not found in the Trilium export."
    exit 1
fi

echo "Export validation OK."

# ------------------------------------------------------------
# Remove old generated site files
# ------------------------------------------------------------

echo "Removing previous Trilium-generated files..."

for item in "$Repo"/* "$Repo"/.[!.]* "$Repo"/..?*; do
    [[ -e "$item" ]] || continue

    name=$(basename "$item")
    preserve=false

    for keep in "${Preserve[@]}"; do
        if [[ "$name" == "$keep" ]]; then
            preserve=true
            break
        fi
    done

    if [[ "$preserve" == false ]]; then
        rm -rf "$item"
    fi
done

# ------------------------------------------------------------
# Install new Trilium export
# ------------------------------------------------------------

echo "Installing new Trilium export..."

cp -a "$ExportDir"/. "$Repo"/

# ------------------------------------------------------------
# Enter repository
# ------------------------------------------------------------

cd "$Repo"

# ------------------------------------------------------------
# Show changes
# ------------------------------------------------------------

echo ""
echo "Checking Git status..."
echo ""

git status --short

# ------------------------------------------------------------
# Stage changes
# ------------------------------------------------------------

git add -A

# ------------------------------------------------------------
# Check whether anything actually changed
# ------------------------------------------------------------

if git diff --cached --quiet; then
    echo ""
    echo "No changes detected. Nothing to commit."
    echo ""

    rm -f "$ExportZip"
    rm -rf "$ExportDir"

    exit 0
fi

# ------------------------------------------------------------
# Commit
# ------------------------------------------------------------

Timestamp=$(date "+%Y-%m-%d %H:%M")

echo ""
echo "Changes detected."
echo "Creating Git commit..."

git commit -m "Update site from Trilium - $Timestamp"

# ------------------------------------------------------------
# Push
# ------------------------------------------------------------

echo ""
echo "Pushing to origin/master..."

git push origin master

# ------------------------------------------------------------
# Cleanup
# ------------------------------------------------------------

echo ""
echo "Cleaning up temporary files..."

rm -f "$ExportZip"
rm -rf "$ExportDir"

# ============================================================
# FINISHED
# ============================================================

echo ""
echo "========================================"
echo " Publication complete!"
echo "========================================"
echo ""

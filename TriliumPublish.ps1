# ============================================================
# Trilium → Static HTML → Git Publisher
# ============================================================

$ErrorActionPreference = "Stop"

# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------

$TriliumUrl = "http://100.78.5.80:8080"
$Repo = "$HOME\Repos\yodg"
$TokenFile = "$HOME\trilium-token.txt"

$ExportZip = "$HOME\TriliumExportTemp.zip"
$ExportDir = "$HOME\TriliumExportTemp"

$Preserve = @(
    ".git",
    ".gitignore",
    ".gitattributes",
    "README.md",
    "favicon.ico",
	"TriliumPublish.ps1"
)

# ------------------------------------------------------------
# Start
# ------------------------------------------------------------

Write-Host ""
Write-Host "========================================"
Write-Host " Trilium → Git Publisher"
Write-Host "========================================"
Write-Host ""

# ------------------------------------------------------------
# Verify required paths
# ------------------------------------------------------------

if (-not (Test-Path $TokenFile)) {
    throw "Token file not found: $TokenFile"
}

if (-not (Test-Path $Repo)) {
    throw "Git repository not found: $Repo"
}

# ------------------------------------------------------------
# Load encrypted Trilium token
# ------------------------------------------------------------

Write-Host "Loading Trilium API token..."

$SecureToken = Get-Content $TokenFile |
    ConvertTo-SecureString

$Token = [System.Net.NetworkCredential]::new(
    "",
    $SecureToken
).Password

$Headers = @{
    Authorization = $Token
}

# ------------------------------------------------------------
# Test Trilium connection
# ------------------------------------------------------------

Write-Host "Checking Trilium connection..."

Invoke-RestMethod `
    -Uri "$TriliumUrl/etapi/app-info" `
    -Headers $Headers `
    -Method Get |
    Out-Null

Write-Host "Trilium connection OK."

# ------------------------------------------------------------
# Clean up previous temporary export
# ------------------------------------------------------------

if (Test-Path $ExportZip) {
    Remove-Item $ExportZip -Force
}

if (Test-Path $ExportDir) {
    Remove-Item $ExportDir -Recurse -Force
}

# ------------------------------------------------------------
# Download static HTML export
# ------------------------------------------------------------

Write-Host "Exporting Trilium notebook..."

Invoke-WebRequest `
    -Uri "$TriliumUrl/etapi/notes/root/export?format=share" `
    -Headers $Headers `
    -Method Get `
    -OutFile $ExportZip

if (-not (Test-Path $ExportZip)) {
    throw "Trilium export was not downloaded."
}

Write-Host "Export downloaded."

# ------------------------------------------------------------
# Extract export
# ------------------------------------------------------------

Write-Host "Extracting export..."

Expand-Archive `
    -Path $ExportZip `
    -DestinationPath $ExportDir

# ------------------------------------------------------------
# Validate export
# ------------------------------------------------------------

if (-not (Test-Path "$ExportDir\index.html")) {
    throw "Export validation failed: index.html was not found."
}

Write-Host "Export validation OK."

# ------------------------------------------------------------
# Remove old Trilium-generated files
# ------------------------------------------------------------

Write-Host "Removing previous Trilium-generated files..."

Get-ChildItem $Repo -Force |
    Where-Object {
        $_.Name -notin $Preserve
    } |
    Remove-Item -Recurse -Force

# ------------------------------------------------------------
# Copy new Trilium export
# ------------------------------------------------------------

Write-Host "Installing new Trilium export..."

Get-ChildItem $ExportDir -Force |
    Copy-Item -Destination $Repo -Recurse -Force

# ------------------------------------------------------------
# Git status
# ------------------------------------------------------------

Set-Location $Repo

Write-Host ""
Write-Host "Checking Git status..."
Write-Host ""

git status --short

# ------------------------------------------------------------
# Stage changes
# ------------------------------------------------------------

git add -A

# ------------------------------------------------------------
# Check whether anything changed
# ------------------------------------------------------------

$Changes = git status --porcelain

if (-not $Changes) {
    Write-Host ""
    Write-Host "No changes detected. Nothing to commit."
    Write-Host ""

    Remove-Item $ExportZip -Force -ErrorAction SilentlyContinue
    Remove-Item $ExportDir -Recurse -Force -ErrorAction SilentlyContinue

    exit 0
}

# ------------------------------------------------------------
# Commit
# ------------------------------------------------------------

$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host ""
Write-Host "Changes detected."
Write-Host "Creating Git commit..."

git commit -m "Update site from Trilium - $Timestamp"

if ($LASTEXITCODE -ne 0) {
    throw "Git commit failed."
}

# ------------------------------------------------------------
# Push
# ------------------------------------------------------------

Write-Host ""
Write-Host "Pushing to origin/master..."

git push origin master

if ($LASTEXITCODE -ne 0) {
    throw "Git push failed."
}

# ------------------------------------------------------------
# Cleanup
# ------------------------------------------------------------

Write-Host ""
Write-Host "Cleaning up temporary files..."

Remove-Item $ExportZip -Force -ErrorAction SilentlyContinue
Remove-Item $ExportDir -Recurse -Force -ErrorAction SilentlyContinue

# ------------------------------------------------------------
# Finished
# ------------------------------------------------------------

Write-Host ""
Write-Host "========================================"
Write-Host " Publication complete!"
Write-Host "========================================"
Write-Host ""
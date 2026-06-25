const { execSync } = require("child_process");

const now = new Date();

const timestamp =
  now.getFullYear() +
  "-" +
  String(now.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(now.getDate()).padStart(2, "0") +
  " " +
  String(now.getHours()).padStart(2, "0") +
  ":" +
  String(now.getMinutes()).padStart(2, "0") +
  ":" +
  String(now.getSeconds()).padStart(2, "0");

try {
  // Stage all changes
  execSync("git add .", { stdio: "inherit" });

  // Skip if nothing changed
  try {
    execSync("git diff --cached --quiet");
    console.log("No changes to back up.");
    process.exit(0);
  } catch {
    // Changes exist, continue
  }

  // Commit changes
  try {
    execSync(`git commit -m "Backup ${timestamp}"`, {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("\nFailed to create commit:");
    console.error(err.message);
    process.exit(1);
  }

  // Push to GitHub
  try {
    execSync("git push origin master", {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("\nFailed to push to remote repository.");
    console.error(
      "Your commit was created locally, but it could not be uploaded.",
    );
    console.error(err.message);
    process.exit(1);
  }

  console.log(`✓ Backup completed at ${timestamp}`);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

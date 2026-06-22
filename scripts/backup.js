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
  execSync("git add .", { stdio: "inherit" });

  try {
    execSync(`git commit -m "Backup ${timestamp}"`, {
      stdio: "inherit",
    });
  } catch {
    console.log("No changes to back up.");
    process.exit(0);
  }

  execSync("git push origin master", { stdio: "inherit" });

  console.log(`✓ Backup completed at ${timestamp}`);
} catch {
  process.exit(1);
}

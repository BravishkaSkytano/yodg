const { execSync } = require("child_process");

const timestamp = new Date()
  .toISOString()
  .replace("T", " ")
  .replace(/\..+/, "");

try {
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "Backup ${timestamp}"`, { stdio: "inherit" });
  execSync("git push origin master", { stdio: "inherit" });

  console.log(`✓ Backup completed at ${timestamp}`);
} catch (err) {
  process.exit(1);
}

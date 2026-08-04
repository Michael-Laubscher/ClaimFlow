import { spawnSync } from "child_process";
import { existsSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distPath = path.join(projectRoot, "dist");
const outputZip = path.join(projectRoot, "claimflow-dist.zip");

if (!existsSync(distPath)) {
  console.error("Error: dist directory not found. Run npm run build first.");
  process.exit(1);
}

if (existsSync(outputZip)) {
  rmSync(outputZip);
}

let command;
let args;

if (process.platform === "win32") {
  command = "powershell.exe";
  args = [
    "-NoProfile",
    "-Command",
    `Compress-Archive -Path \"${distPath}\\*\" -DestinationPath \"${outputZip}\" -Force`,
  ];
} else {
  command = "zip";
  args = ["-r", outputZip, "dist"];
}

const result = spawnSync(command, args, { cwd: projectRoot, stdio: "inherit" });

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status);
}

console.log(`Created ${outputZip}`);

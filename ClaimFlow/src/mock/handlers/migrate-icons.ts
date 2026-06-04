import fs from "fs";
import path from "path";

const SRC = path.resolve(__dirname, "../src");

function replaceIconImports(dir: string) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      replaceIconImports(fullPath);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      let code = fs.readFileSync(fullPath, "utf-8");
      code = code.replace(/from\s+["'][^"']*icons\/[A-Za-z0-9]+["']/g, 'from "@/shared/components/design-system/icons/svg"');
      fs.writeFileSync(fullPath, code, "utf-8");
    }
  });
}

replaceIconImports(SRC);

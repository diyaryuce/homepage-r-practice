import fs from "node:fs";
import path from "node:path";

const sourceFolder = "./src";
const supportedFiles = new Set([".js", ".jsx", ".ts", ".tsx", ".css"]);

function convertFile(filePath) {
  const originalContent = fs.readFileSync(filePath, "utf8");

  const convertedContent = originalContent.replace(
    /(-?\d+(?:\.\d+)?)px\b/g,
    (original, number) => {
      const pixels = Number(number);

      if (pixels === 0) {
        return "0";
      }

      const rem = Number((pixels / 16).toFixed(5));

      return `${rem}rem`;
    }
  );

  if (convertedContent !== originalContent) {
    fs.writeFileSync(filePath, convertedContent);
    console.log(`Converted: ${filePath}`);
  }
}

function scanFolder(folderPath) {
  const entries = fs.readdirSync(folderPath, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const entryPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      scanFolder(entryPath);
      continue;
    }

    if (supportedFiles.has(path.extname(entry.name))) {
      convertFile(entryPath);
    }
  }
}

scanFolder(sourceFolder);

console.log("Finished converting px to rem.");
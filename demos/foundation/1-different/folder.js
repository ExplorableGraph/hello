import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get a reference to the folder.
const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "../people");

// Read the list of files in that folder.
const fileNames = await fs.readdir(filesFolder);

// Display the contents of all the files.
for (const key of fileNames) {
  const filePath = path.join(filesFolder, key);
  const value = await fs.readFile(filePath);
  console.log(`${key}: ${value}`);
}

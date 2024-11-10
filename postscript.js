console.log("info: downloading neologd by postinstall script...");
console.log("If it fails, you can manually download and place the files.");
console.log("Extract and put into './dict'");
console.log("https://github.com/sushigadaisuki/kuromoji-ipadic-neologd/releases");

import { execSync } from 'child_process';
const libraries = ['node-fetch', "adm-zip"];
libraries.forEach(lib => {
  console.log(`Installing ${lib}...`);
  execSync(`npm install ${lib} --no-save`, { stdio: 'inherit' });
});


import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import url from 'node:url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const file_url = 'https://github.com/sushigadaisuki/kuromoji-ipadic-neologd/releases/download/master/dict.zip';
const outputPath = path.resolve(__dirname, '.'); 
const zipPath = path.resolve(__dirname, 'dict.zip');
async function downloadFile(file_url, dest) {
  const res = await fetch(file_url);
  if (!res.ok) throw new Error(`Failed to fetch ${file_url}: ${res.statusText}`);
  const fileStream = fs.createWriteStream(dest);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
}

function unzipFile(zipFilePath, outputDir) {
  const zip = new AdmZip(zipFilePath);
  zip.extractAllTo(outputDir, true);
}

(async () => {
  try {
    console.log(`Downloading file from ${file_url}...`);
    await downloadFile(file_url, zipPath);
    console.log(`File downloaded to ${zipPath}`);

    console.log(`Extracting ZIP to ${outputPath}...`);
    unzipFile(zipPath, outputPath);
    console.log(`Files extracted to ${outputPath}`);

    fs.unlinkSync(zipPath);
    console.log(`Temporary ZIP file deleted.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
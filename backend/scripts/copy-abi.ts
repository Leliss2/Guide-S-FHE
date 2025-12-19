import fs from "fs";
import path from "path";

const SRC = path.join(
  __dirname,
  "../artifacts/contracts/FHECounter.sol/FHECounter.json"
);

const DEST = path.join(
  __dirname,
  "../../frontend/src/contracts/FHECounter.json"
);

fs.copyFileSync(SRC, DEST);
console.log("✅ FHECounter ABI copied to frontend");

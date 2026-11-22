import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Di laci meja, ada foto yang belum pernah kauambil. Di belakangnya, dengan tulisan tanganmu, tanggal besok. Di foto itu kau berdiri di jembatan yang belum pernah kaulewati, tersenyum pada seseorang di luar bingkai. Kau tidak ingat menulisnya, dan kau belum membuangnya.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const dataFile = path.join(__dirname, '../backup/data.json');
  if (!fs.existsSync(dataFile)) {
    throw new Error('Backup file not found!');
  }

  const raw = fs.readFileSync(dataFile, 'utf-8');
  const data = JSON.parse(raw);

  for (const [modelName, records] of Object.entries(data)) {
    const model = (prisma as any)[modelName];
    if (typeof model?.createMany === 'function' && Array.isArray(records)) {
      console.log(`⬆ Importing into ${modelName}...`);
      if (records.length > 0) {
        await model.createMany({
          data: records,
          skipDuplicates: true, // biar nggak error kalau sudah ada
        });
      }
    }
  }

  console.log('✅ Import completed!');
}

main()
  .catch((e) => {
    console.error('❌ Import failed:', e);
  })
  .finally(() => prisma.$disconnect());

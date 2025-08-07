import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const backupDir = path.join(__dirname, '../backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const data: Record<string, any> = {};

  // Ambil semua property prisma client yang merupakan model
  for (const modelName of Object.keys(prisma)) {
    const model = (prisma as any)[modelName];
    if (typeof model?.findMany === 'function') {
      console.log(`📦 Exporting data from model: ${modelName}`);
      data[modelName] = await model.findMany();
    }
  }

  fs.writeFileSync(
    path.join(backupDir, 'data.json'),
    JSON.stringify(data, null, 2),
    'utf-8',
  );

  console.log('✅ Export completed! Data saved to prisma/backup/data.json');
}

main()
  .catch((e) => {
    console.error('❌ Export failed:', e);
  })
  .finally(() => prisma.$disconnect());

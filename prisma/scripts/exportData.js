"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const prisma = new client_1.PrismaClient();
async function main() {
    const backupDir = path.join(__dirname, '../backup');
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }
    const data = {};
    for (const modelName of Object.keys(prisma)) {
        const model = prisma[modelName];
        if (typeof model?.findMany === 'function') {
            console.log(`📦 Exporting data from model: ${modelName}`);
            data[modelName] = await model.findMany();
        }
    }
    fs.writeFileSync(path.join(backupDir, 'data.json'), JSON.stringify(data, null, 2), 'utf-8');
    console.log('✅ Export completed! Data saved to prisma/backup/data.json');
}
main()
    .catch((e) => {
    console.error('❌ Export failed:', e);
})
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=exportData.js.map
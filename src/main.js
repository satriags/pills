"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const error_filter_1 = require("./common/error.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.useGlobalFilters(new error_filter_1.ErrorFilter());
    await app.listen(process.env.PORT ?? 3011);
}
bootstrap();
//# sourceMappingURL=main.js.map
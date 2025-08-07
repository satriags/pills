import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipScheduleModule } from './ship-schedule/ship-schedule.module';
import { ShipScheduleTemplateModule } from './ship-schedule-template/ship-schedule-template.module';
import { AuthModule } from './auth/auth.module';
import { ShipRoomModule } from './ship-room/ship-room.module';
import { ShipModule } from './ship/ship.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    ShipScheduleModule,
    ShipScheduleTemplateModule,
    ShipRoomModule,
    ShipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

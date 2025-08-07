import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/common/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategies';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/common/prisma.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [JwtService, JwtStrategy, AuthService],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule {}

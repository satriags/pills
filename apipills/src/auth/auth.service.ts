import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private primaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateJwtUser(userId: string) {
    const user = await this.primaService.user.findFirst({
      where: { id: userId },
    });
    if (!user)
      throw new UnauthorizedException({
        code: 404,
        message: 'User not found!',
        error: 'Forbidden',
      });
    if (user.role == 'USER') {
      throw new UnauthorizedException({
        code: 403,
        message: 'Access denied',
        error: 'Forbidden',
      });
    }
    const currentUser = user;
    return currentUser;
  }

  async findOne(id: string) {
    return await this.primaService.user.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });
  }
}

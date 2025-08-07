import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { WebResponse } from 'src/common/response.model';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req): Promise<WebResponse<any>> {
    // return 'asda';
    const user = await this.authService.findOne(req.user.id);
    return {
      code: 200,
      message: 'Success',
      payload: user,
    };
  }
}

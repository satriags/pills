import { ConfigType } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthJwtPayload } from '../types/auth-jwtPayload';
import jwtConfig from 'src/common/jwt.config';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private jwtConfiguration;
    private authService;
    constructor(jwtConfiguration: ConfigType<typeof jwtConfig>, authService: AuthService);
    validate(payload: AuthJwtPayload): Promise<{
        id: string;
        username: string | null;
        user_nohp: string | null;
        created_at: Date;
        created_by: string | null;
        updated_at: Date | null;
        updated_by: string | null;
        deleted_at: Date | null;
        deleted_by: string | null;
        user_last_url: string | null;
        role: import(".prisma/client").$Enums.user_role | null;
    }>;
}
export {};

import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma.service';
export declare class AuthService {
    private primaService;
    private jwtService;
    constructor(primaService: PrismaService, jwtService: JwtService);
    validateJwtUser(userId: string): Promise<{
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
    findOne(id: string): Promise<{
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
    } | null>;
}

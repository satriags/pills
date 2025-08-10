import { AuthService } from './auth.service';
import { WebResponse } from 'src/common/response.model';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfile(req: any): Promise<WebResponse<any>>;
}

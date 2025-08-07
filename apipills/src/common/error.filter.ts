import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError, HttpException)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    let status =
      exception instanceof HttpException ? exception.getStatus() : 500;
    let message = exception.message;

    if (exception instanceof ZodError) {
      status = 400;
      message = 'Validation error';
    }

    response.status(status).json({
      code: status,
      message: message,
    });
  }
}

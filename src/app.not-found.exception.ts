import { join } from 'path';
import { Catch, ExceptionFilter, NotFoundException,InternalServerErrorException, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.sendFile(join(__dirname, '..', 'static/404-page.html'));
    }
}

@Catch()
export class ServeStaticExceptionFilter implements ExceptionFilter {

    catch( exception: any, host: ArgumentsHost ): any {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        if (exception.code === "ENOENT") {
            response.sendFile(join(__dirname, '..', 'static/404-page.html'));
        }
    }
}
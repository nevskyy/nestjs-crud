import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// your-domain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // @PUT @POST @DELETE
  getHello(): { name: string } {
    // return this.appService.getHello();
    return { name: 'Max' };
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.modul';

@Module({
  imports: [ProductsModule],
  controllers: [AppController], // handle requests and send back responses
  providers: [AppService], // extra servises(classes) which you can inject into controllers or other providers to provide certain functionality
})
export class AppModule {}

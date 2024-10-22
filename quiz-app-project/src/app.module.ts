import { ProductsController } from './products/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ ProductsController],
  providers: [],
})
export class AppModule {}

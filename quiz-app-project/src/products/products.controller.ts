import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService: ProductsService) {}
    
    @get()
    getProducts() {
        return this.productsService.findAll();
    }



    @Get(':id')
    getProduct(@Param('id', new ParseIntPipe({
        errorHttpStatusCode: 404,
        exceptionFactory: (errors) => new Error('Invalid id'),
    })) id: number) {
        return this.productsService.findOne(id);
    }
        
}

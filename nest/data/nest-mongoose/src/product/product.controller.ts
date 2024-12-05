import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductRequest } from './dto/create-product-request.dto';
import { CreateProductResponse } from './dto/create-product-response.dto';
import { Product, ProductHydratedDocument } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductRequest: CreateProductRequest): Promise<CreateProductResponse> {


    let product : Product = new Product()
    createProductRequest.name = product.name
    createProductRequest.price = product.price
    createProductRequest.reference = product.reference

    let createProductResponse: CreateProductResponse = new CreateProductResponse();

    let productHydratedDocument: ProductHydratedDocument = await this.productService.create(product);
    createProductResponse.id = productHydratedDocument._id;
    createProductResponse.name  =  productHydratedDocument.name;
    createProductResponse.price =  productHydratedDocument.price;
    createProductResponse.reference =  productHydratedDocument.reference;

    return createProductResponse;
  }

  // @Get()
  // findAll() {
  //   return this.productService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}

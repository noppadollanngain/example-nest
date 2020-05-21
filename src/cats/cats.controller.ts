import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('')
  create(@Body() body) {
    return body;
  }
}

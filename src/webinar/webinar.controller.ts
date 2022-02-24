import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebinarService } from './webinar.service';
import {webinar as WebinarModel } from '@prisma/client';

@Controller('webinar')
export class WebinarController {
  constructor(private readonly webinarService: WebinarService) {}

  @Post()
  create(@Body() webinar: WebinarModel) {
    return this.webinarService.create(webinar);
  }

  @Get()
  findAll() {
    return this.webinarService.webinars();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webinarService.webinar({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() webinar: WebinarModel) {
    return this.webinarService.update({
      where: {id: Number(id)}, 
      data: webinar}
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webinarService.delete({id: Number(id)});
  }
}

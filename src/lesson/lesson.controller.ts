import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { lesson as LessonModel } from '@prisma/client';

@Controller('lesson')
export class LessonController {
  constructor(
    private readonly lessonService: LessonService
  ) {}

  @Get()
  async findAll(): Promise<LessonModel[]> {
    return this.lessonService.lessons();
  }

  @Get('/:id')
  async getLessonById(@Param('id') id: string): Promise<LessonModel> {
    return this.lessonService.lesson({ id: Number(id) });
  }

  @Post()
  async create(
    @Body() lesson: LessonModel): Promise<LessonModel> {
    return this.lessonService.create(lesson);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() lesson: LessonModel) {
    return this.lessonService.update({
      where: {id: Number(id)}, 
      data: lesson}
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonService.delete({ id: Number(id) });
  }
}

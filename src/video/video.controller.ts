import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoService } from './video.service';
import { video as VideoModel } from '@prisma/client';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  create(@Body() video: VideoModel) {
    return this.videoService.create(video);
  }

  @Get()
  findAll() {
    return this.videoService.videos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.video({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() video: VideoModel) {
    return this.videoService.update({
      where: {id: Number(id)}, 
      data: video}
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.delete({id: Number(id)});
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { podcast as PodcastModel } from '.prisma/client';

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Post()
  create(@Body() podcast: PodcastModel) {
    return this.podcastService.create(podcast);
  }

  @Get()
  findAll() {
    return this.podcastService.podcasts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.podcastService.podcast({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() podcast: PodcastModel) {
    return this.podcastService.update({
      where: {id: Number(id)}, 
      data: podcast}
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.podcastService.delete({id: Number(id)});
  }
}

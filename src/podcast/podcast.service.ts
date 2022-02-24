import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { podcast as Podcast, Prisma } from '@prisma/client';

@Injectable()
export class PodcastService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.podcastCreateInput): Promise<Podcast> {
    return this.prisma.podcast.create({
      data,
    })
  }

  async podcast(podcastWhereUniqueInput: Prisma.podcastWhereUniqueInput): Promise<Podcast | null> {
    return this.prisma.podcast.findUnique({
      where: podcastWhereUniqueInput,
    });
  }

  async podcasts(): Promise<Podcast[]> {
    return this.prisma.podcast.findMany();
  }


  update(params: {
    where: Prisma.podcastWhereUniqueInput;
    data: Prisma.podcastUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.podcast.update({
      data,
      where,
    })
  }

  delete(where: Prisma.podcastWhereUniqueInput): Promise<Podcast> {
    return this.prisma.podcast.delete({
      where,
    })
  }
}
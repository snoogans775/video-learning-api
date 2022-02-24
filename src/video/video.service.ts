import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { video as Video, Prisma } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.videoCreateInput): Promise<Video> {
    return this.prisma.video.create({
      data,
    })
  }

  async video(videoWhereUniqueInput: Prisma.videoWhereUniqueInput): Promise<Video | null> {
    return this.prisma.video.findUnique({
      where: videoWhereUniqueInput,
      include: {
        topics: true
      }
    });
  }

  async videos(): Promise<Video[]> {
    return this.prisma.video.findMany({
      include: {
        topics: true
      }
    });
  }


  update(params: {
    where: Prisma.videoWhereUniqueInput;
    data: Prisma.videoUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.video.update({
      data,
      where,
    })
  }

  delete(where: Prisma.videoWhereUniqueInput): Promise<Video> {
    return this.prisma.video.delete({
      where,
    })
  }
}
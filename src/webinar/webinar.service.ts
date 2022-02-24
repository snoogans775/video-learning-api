import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { webinar as Webinar, Prisma } from '@prisma/client';

@Injectable()
export class WebinarService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.webinarCreateInput): Promise<Webinar> {
    return this.prisma.webinar.create({
      data,
    })
  }

  async webinar(webinarWhereUniqueInput: Prisma.webinarWhereUniqueInput): Promise<Webinar | null> {
    return this.prisma.webinar.findUnique({
      where: webinarWhereUniqueInput,
    });
  }

  async webinars(): Promise<Webinar[]> {
    return this.prisma.webinar.findMany();
  }


  update(params: {
    where: Prisma.webinarWhereUniqueInput;
    data: Prisma.webinarUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.webinar.update({
      data,
      where,
    })
  }

  delete(where: Prisma.webinarWhereUniqueInput): Promise<Webinar> {
    return this.prisma.webinar.delete({
      where,
    })
  }
}
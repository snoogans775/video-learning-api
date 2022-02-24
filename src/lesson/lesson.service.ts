import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { lesson as Lesson, Prisma } from '@prisma/client';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.lessonCreateInput): Promise<Lesson> {
    return this.prisma.lesson.create({
      data,
    })
  }

  async lesson(lessonWhereUniqueInput: Prisma.lessonWhereUniqueInput): Promise<Lesson | null> {
    return this.prisma.lesson.findUnique({
      where: lessonWhereUniqueInput,
      include: {
        resources: true,
        videos: {
          orderBy: {weight: 'desc'}
        },
        introVideo: true,
        topics: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async lessons(): Promise<Lesson[]> {
    console.log('GETTING LESSONS')
    return this.prisma.lesson.findMany({
      include: {
        videos: {
          orderBy: {weight: 'desc'}
        },
        introVideo: true,
        topics: true
      }
    });
  }


  update(params: {
    where: Prisma.lessonWhereUniqueInput;
    data: Prisma.lessonUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.lesson.update({
      data,
      where,
    })
  }

  delete(where: Prisma.lessonWhereUniqueInput): Promise<Lesson> {
    return this.prisma.lesson.delete({
      where,
    })
  }
}

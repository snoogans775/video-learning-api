import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './lesson/lesson.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VideoModule } from './video/video.module';
import { WebinarModule } from './webinar/webinar.module';
import { PodcastModule } from './podcast/podcast.module';

@Module({
  imports: [LessonModule, PrismaModule, VideoModule, WebinarModule, PodcastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

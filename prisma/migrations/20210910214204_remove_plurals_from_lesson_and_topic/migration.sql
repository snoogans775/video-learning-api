/*
  Warnings:

  - You are about to drop the `lesson_topics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lesson_videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `lesson_topics` DROP FOREIGN KEY `lesson_topics_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lesson_topics` DROP FOREIGN KEY `lesson_topics_topicId_fkey`;

-- DropForeignKey
ALTER TABLE `lesson_videos` DROP FOREIGN KEY `lesson_videos_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lesson_videos` DROP FOREIGN KEY `lesson_videos_videoId_fkey`;

-- DropTable
DROP TABLE `lesson_topics`;

-- DropTable
DROP TABLE `lesson_videos`;

-- CreateTable
CREATE TABLE `lesson_video` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER UNSIGNED NOT NULL,
    `videoId` INTEGER UNSIGNED NOT NULL,
    `featured` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lesson_topic` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER UNSIGNED NOT NULL,
    `topicId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lesson_video` ADD CONSTRAINT `lesson_video_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesson_video` ADD CONSTRAINT `lesson_video_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesson_topic` ADD CONSTRAINT `lesson_topic_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesson_topic` ADD CONSTRAINT `lesson_topic_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `lesson_topics` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER UNSIGNED NOT NULL,
    `topicId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lesson_topics` ADD CONSTRAINT `lesson_topics_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesson_topics` ADD CONSTRAINT `lesson_topics_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `video` ADD COLUMN `length` VARCHAR(255);

-- AlterTable
ALTER TABLE `webinar` MODIFY `description` VARCHAR(1027) NOT NULL DEFAULT '',
    MODIFY `trainerBio` VARCHAR(1027);

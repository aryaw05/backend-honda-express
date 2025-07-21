/*
  Warnings:

  - You are about to drop the column `bawah_e_tengah` on the `motor` table. All the data in the column will be lost.
  - You are about to drop the column `detail_header` on the `motor` table. All the data in the column will be lost.
  - You are about to drop the column `gambar` on the `motor` table. All the data in the column will be lost.
  - You are about to drop the column `tengah` on the `motor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `motor` DROP COLUMN `bawah_e_tengah`,
    DROP COLUMN `detail_header`,
    DROP COLUMN `gambar`,
    DROP COLUMN `tengah`,
    ADD COLUMN `gambar_card` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `gambar_details` (
    `id_gambar` INTEGER NOT NULL AUTO_INCREMENT,
    `id_motor` INTEGER NOT NULL,
    `url_gambar` VARCHAR(190) NOT NULL,

    PRIMARY KEY (`id_gambar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `gambar_details` ADD CONSTRAINT `gambar_details_id_motor_fkey` FOREIGN KEY (`id_motor`) REFERENCES `motor`(`id_motor`) ON DELETE CASCADE ON UPDATE CASCADE;

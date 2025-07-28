/*
  Warnings:

  - Added the required column `id_user` to the `gambar_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gambar_details` ADD COLUMN `id_user` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `gambar_details` ADD CONSTRAINT `gambar_details_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

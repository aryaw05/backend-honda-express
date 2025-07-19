-- CreateTable
CREATE TABLE `kategori` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `kategori_nama_kategori_key`(`nama_kategori`),
    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motor` (
    `id_motor` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kategori` INTEGER NOT NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `harga` DECIMAL(12, 2) NULL,
    `gambar` VARCHAR(191) NULL,
    `detail_header` VARCHAR(191) NULL,
    `tengah` VARCHAR(191) NULL,
    `bawah_e_tengah` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_motor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `motor` ADD CONSTRAINT `motor_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori`(`id_kategori`) ON DELETE CASCADE ON UPDATE CASCADE;

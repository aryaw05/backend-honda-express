-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "motor" (
    "id_motor" SERIAL NOT NULL,
    "id_kategori" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "deskripsi" TEXT,
    "harga" DECIMAL(12,2),
    "gambar_card" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "motor_pkey" PRIMARY KEY ("id_motor")
);

-- CreateTable
CREATE TABLE "gambar_details" (
    "id_gambar" SERIAL NOT NULL,
    "id_motor" INTEGER NOT NULL,
    "url_gambar" VARCHAR(190) NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "gambar_details_pkey" PRIMARY KEY ("id_gambar")
);

-- CreateIndex
CREATE UNIQUE INDEX "kategori_nama_kategori_key" ON "kategori"("nama_kategori");

-- AddForeignKey
ALTER TABLE "motor" ADD CONSTRAINT "motor_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motor" ADD CONSTRAINT "motor_id_kategori_fkey" FOREIGN KEY ("id_kategori") REFERENCES "kategori"("id_kategori") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gambar_details" ADD CONSTRAINT "gambar_details_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gambar_details" ADD CONSTRAINT "gambar_details_id_motor_fkey" FOREIGN KEY ("id_motor") REFERENCES "motor"("id_motor") ON DELETE CASCADE ON UPDATE CASCADE;

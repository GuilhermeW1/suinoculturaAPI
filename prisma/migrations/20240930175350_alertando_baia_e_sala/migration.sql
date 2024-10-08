/*
  Warnings:

  - You are about to drop the column `idSala` on the `Alocation` table. All the data in the column will be lost.
  - You are about to drop the column `idBaia` on the `Sala` table. All the data in the column will be lost.
  - Added the required column `idBaia` to the `Alocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSala` to the `Baia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alocation" DROP CONSTRAINT "Alocation_idSala_fkey";

-- DropForeignKey
ALTER TABLE "Sala" DROP CONSTRAINT "Sala_idBaia_fkey";

-- AlterTable
ALTER TABLE "Alocation" DROP COLUMN "idSala",
ADD COLUMN     "idBaia" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Baia" ADD COLUMN     "idSala" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sala" DROP COLUMN "idBaia",
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Baia" ADD CONSTRAINT "Baia_idSala_fkey" FOREIGN KEY ("idSala") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alocation" ADD CONSTRAINT "Alocation_idBaia_fkey" FOREIGN KEY ("idBaia") REFERENCES "Baia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

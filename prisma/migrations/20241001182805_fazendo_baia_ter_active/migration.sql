/*
  Warnings:

  - Added the required column `active` to the `Baia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Baia" ADD COLUMN     "active" BOOLEAN NOT NULL;

/*
  Warnings:

  - Added the required column `active` to the `Porca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Porca" ADD COLUMN     "active" BOOLEAN NOT NULL;
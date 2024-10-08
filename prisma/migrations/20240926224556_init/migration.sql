-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "ds_estado" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Porca" (
    "id" SERIAL NOT NULL,
    "brinco" TEXT NOT NULL,
    "moca" TEXT NOT NULL,
    "tetas" INTEGER NOT NULL,
    "desperdica_racao" BOOLEAN NOT NULL,
    "boa" BOOLEAN NOT NULL,
    "estadoId" INTEGER NOT NULL,

    CONSTRAINT "Porca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Baia" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "Baia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "idBaia" INTEGER NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alocation" (
    "id" SERIAL NOT NULL,
    "idSala" INTEGER NOT NULL,
    "idPorca" INTEGER NOT NULL,
    "is_actite" BOOLEAN NOT NULL,
    "dt_inicio" TIMESTAMP(3) NOT NULL,
    "dt_fim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Porca" ADD CONSTRAINT "Porca_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_idBaia_fkey" FOREIGN KEY ("idBaia") REFERENCES "Baia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alocation" ADD CONSTRAINT "Alocation_idSala_fkey" FOREIGN KEY ("idSala") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alocation" ADD CONSTRAINT "Alocation_idPorca_fkey" FOREIGN KEY ("idPorca") REFERENCES "Porca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { Porca } from "@prisma/client";
import { PorcaRepository } from "./porca.repository";
import prisma  from "../../../../prisma/cliente";

export class PorcaPrismaRepository implements PorcaRepository {
    // TODO: fazer $transaction
    async deAlocate(idAlocation: number) {
        try {
            const alocation = await prisma.alocation.findFirst({ 
                where: { id: idAlocation }
            });

            if (alocation == null) {
                throw new Error(`Id da alocacao invalida`);
            }

            await prisma.baia.update({
                where: { id: alocation.idBaia },
                data: {
                    active: false
                }
            });

            await prisma.alocation.update({
                where: { id: idAlocation },
                data: {
                    ...alocation,
                    dt_fim: new Date(Date.now()),
                    is_actite: false

                }
            })
        } catch (error) {
            throw new Error(`Erro ao fazer a desalocacao ${error}`);
        }
    }
    async alocate(idPorca: number, idBaia: number) {
        try {
            const alotcation = await prisma.alocation.findFirst({
                where: { 
                    idPorca: idPorca, 
                    idBaia: idBaia
                }
            });

            if (alotcation !== null) {
                throw new Error(`Esta baia ou porca ja esta alocada, desaloquea primeiro`);
            }

            await prisma.alocation.create({ 
                data: {
                    idPorca,
                    idBaia,
                    dt_inicio: new Date(Date.now()),
                    is_actite: true,
                    dt_fim: null,
                }
            });
        } catch (error) {
            throw new Error(`Erro ao fazer a alocacao ${error}`);
        }
    }

    async create(porca: Omit<Porca, "id">) {
        try {
            const newPorca = await prisma.porca.create({data: porca});
            return newPorca;
        } catch (error) {
            throw new Error(`Erro ao criar porca ${error}`);
        }
    }

    async findById(id: number) {
        try {
            const porca = await prisma.porca.findFirst({
                where: {id: id}
            });

            return porca;
        } catch (error) {
            throw new Error(`Erro ao encontrar porca ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const porca = await this.findById(id);

            if (porca == null) {
                throw new Error('id da porca invalido');
            }

            await prisma.porca.update({
                where: {
                    id: id
                },
                data: {
                    ...porca,
                    active: false,
                }
            })
        } catch (error) {
            throw new Error(`Erro ao excluir porca ${error}`);
        }
    }

    async findByBrinco(brinco: string) {
        try {
            const porcas = await prisma.porca.findMany({
                where: {
                    brinco: brinco,
                    active: true
                }
            })

            return porcas;
        } catch (error) {
            throw new Error(`Erro ao procurar pelo brinco ${error}`);
        }
    }

    async getAllActive() {
        try {
            const porcas = await prisma.porca.findMany({
                where: {
                    active: true
                }
            })

            return porcas;
        } catch (error) {
            throw new Error(`Erro ao procurar pelo brinco ${error}`);
        }
    }

    async update(porca: Porca) {
        try {
            const newPorca = await this.findById(porca.id);

            if (newPorca == null) {
                throw new Error('id da porca invalido');
            }

            await prisma.porca.update({
                where: {
                    id: porca.id
                },
                data: newPorca
            })
        } catch (error) {
            throw new Error(`Erro ao excluir porca ${error}`);
        }
    }
}
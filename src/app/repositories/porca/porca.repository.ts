import { Porca } from "@prisma/client";

export interface PorcaRepository {
    create: (porca: Omit<Porca, "id">) => Promise<Porca>
    getAllActive: () => Promise<Porca[] | null>
    findById: (id: number) => Promise<Porca | null>
    findByBrinco: (brinco: string) => Promise<Porca[] | null> //brincos podem estar repetidos
    update: (porca: Porca) => Promise<void>
    delete: (id: number) => Promise<void>

    alocate: (idPorca: number, idSala: number) => Promise<void>
    deAlocate: (idPorca: number, idSala: number) => Promise<void>
}
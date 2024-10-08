import { Baia } from "@prisma/client";

export interface BaiaRepository {
    getBaias: () => Promise<Baia[]>
    getFreeBaias: () => Promise<Baia[]>
}
import prisma from "../../../../prisma/cliente";
import { BaiaRepository } from "./baia.repository";

export class BaiaPrismaRepository implements BaiaRepository {
    
    async getBaias() {
        try {
            const baias = await prisma.baia.findMany();
            return baias;
        } catch (error) {
            throw new Error(`Erro ao listar baias ${error}`);
        }
    }

    async getFreeBaias() {
        try {
            const baias = await prisma.baia.findMany({
                where: { active: false }
            });
            return baias;
        } catch (error) {
            throw new Error(`Erro ao listar baias ${error}`);
        }
    }
}
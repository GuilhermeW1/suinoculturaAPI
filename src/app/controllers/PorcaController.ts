import { Request, Response } from "express";
import { PorcaRepository } from "../repositories/porca/porca.repository";
import { Porca } from "@prisma/client";

class PorcaController {
    private repository: PorcaRepository;

    constructor(repository: PorcaRepository) {
        this.repository = repository;
    }

    async create(req: Request, res: Response) {
        try {
            const { brinco, moca, tetas, disperdicaRacao, boa, estadoId, active } = req.body;

            const porca: Omit<Porca, 'id'> = {
                brinco,
                active,
                moca,
                tetas,
                desperdica_racao: disperdicaRacao,
                boa,
                estadoId,
            }

            const newPorca: Porca = await this.repository.create(porca);
            return res.status(201).json(newPorca);

        } catch (error: unknown) {
            if (error instanceof Error) return res.status(500).json({error: 'erro ao criar porca ' + error.message});
            return res.status(500).json({error: 'erro ao criar porca'});
        }
    }

    async getPorcaById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                console.log("asdf")
                return res.status(400).json({error: 'Id nao informado'});
            }

            const porca = await this.repository.findById(Number(id));
            return res.status(200).json(porca);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({error: 'Erro ao achar porca ' + error.message});
            }

            return res.status(500).json({error: 'Erro ao achar porca'});
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const porcas = await this.repository.getAllActive();
            res.status(200).json(porcas);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({error: 'Erro ao achar porca' + error.message});
            }
            return res.status(500).json({error: 'Erro ao achar porca'});
        }
    }

}

export default PorcaController;
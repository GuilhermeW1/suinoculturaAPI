import { Request, Response } from "express";
import { BaiaRepository } from "../repositories/baia/baia.repository";

export class BaiaController {
    private repository: BaiaRepository;

    constructor (repository: BaiaRepository) {
        this.repository = repository;
    }

    async getBaias(req: Request, res: Response) {
        try {
            const baias = await this.repository.getBaias();    
            return res.status(200).json(baias);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json(`Error: ${error.message}`);
            }

            return res.status(500).json(`Error` +error);
        }
    }

    async getFreeBaias(req: Request, res: Response) {
        try {
            const baias = await this.repository.getFreeBaias();
            return res.status(200).json(baias);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json(`Error: ${error.message}`);
            }

            return res.status(500).json(`Error` +error);
        }
    }

}
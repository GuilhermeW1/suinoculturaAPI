import { Request, Response, Router } from "express";
import { PorcaPrismaRepository } from "../app/repositories/porca/porca.prisma";
import PorcaController from "../app/controllers/PorcaController";

const porcaRoutes = Router();

porcaRoutes.post('/porcas', (req: Request, res: Response) => {
    const prismaRepo = new PorcaPrismaRepository();
    const porcaController = new PorcaController(prismaRepo);

    porcaController.create(req, res);
});

porcaRoutes.get('/porcas/:id', (req: Request, res: Response) => {
    const prismaRepo = new PorcaPrismaRepository();
    const porcaController = new PorcaController(prismaRepo);

    porcaController.getPorcaById(req, res);
});

porcaRoutes.get('/porcas', (req: Request, res: Response) => {
    const prismaRepo = new PorcaPrismaRepository();
    const porcaController = new PorcaController(prismaRepo);

    porcaController.getAll(req, res);
});

export default porcaRoutes;
import { Request, Response, Router } from "express";
import { BaiaPrismaRepository } from "../app/repositories/baia/baia.prisma";
import { BaiaController } from "../app/controllers/baiaController";

const baiaRoutes = Router();

baiaRoutes.get('/baias', (req: Request, res: Response) => {
    const baiaRepository = new BaiaPrismaRepository();
    const baiaController = new BaiaController(baiaRepository);
    console.log('entr')
    baiaController.getBaias(req, res);
});

export default baiaRoutes;

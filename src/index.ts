import express from 'express';
import porcaRoutes from './routes/porca.routes';
import baiaRoutes from './routes/baia.routes';

const app = express();
app.use(porcaRoutes);
app.use(baiaRoutes);
app.use(express.json())

app.listen(3000, () => {
    console.log('server running');
})
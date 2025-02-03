import express from 'express';
import { router } from './rotas/routes.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());


app.use('/carros', router) 

mongoose.connect('mongodb://localhost:27017/Carros').then(()=>{
    console.log('Conectado ao Banco de Dados!')
}).catch( err => {
    console.error('Não foi possíve conectar ao banco de dados', err)
})




app.listen(3224, () => {
    console.log('Servidor Rodando!')
});
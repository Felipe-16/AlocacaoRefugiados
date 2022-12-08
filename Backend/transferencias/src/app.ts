import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

//Criar/conectar em um banco
mongoose.connect('mongodb://localhost/doacao')

//Express enxergar o request em json
app.use(express.json());

//Utilizar o modulo de routes
app.use(routes);


app.listen(3000, () =>{
    console.log("Server is listening...");
});


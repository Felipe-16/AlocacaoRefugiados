import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

//Criar/conectar em um banco
mongoose.connect('mongodb+srv://root:root@apicluster.dud9qod.mongodb.net/projlp?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectado ao banco!');
    app.listen(5000, () =>{
        console.log("Server is listening...");
    });
})
.catch((err) => console.log(err))

//Express enxergar o request em json
app.use(express.json());

//Barramento de eventos
app.use(routes);

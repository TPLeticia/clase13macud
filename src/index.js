import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req,res)=> {
    res.send('Hello Compañeros!');
})

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en http://localhost:${PORT}`);
    //console.log(`Servidor corriendo en el puerto ${PORT}`);
});
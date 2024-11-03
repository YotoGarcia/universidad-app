const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');

dotenv.config();


const app = express();
const port = process.env.PORT || 4001; 


connectDB();


app.use(cors()); 
app.use(express.json()); 


app.use('/universidad', require('./src/routes/universidadRoute.js')); 



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

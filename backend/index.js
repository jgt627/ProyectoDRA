const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
//const favicon = require('serve-favicon');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const passport = require('passport');

require('./passport');

const app = express();
app.use(express.json());
app.use(cors());



const URI = 'mongodb://localhost:27017/DRA'
mongoose.connect(URI);


app.use(passport.initialize());

app.use('/api/ingrediente/', require('./rutas/ingredienteRuta'));
app.use('/api/receta/', require('./rutas/recetaRuta'));
app.use('/api/categoria/', require('./rutas/categoriaRuta'));
app.use('/api/auth/', require('./rutas/authRuta'));


app.get('/', function(req, res) {
    res.send('Pagina de inicio');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ "message": err.name + ": " + err.message });
    }
});
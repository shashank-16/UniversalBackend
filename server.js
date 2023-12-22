// require('dotenv').config({ path: './config/dev.env' })
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const req = require('express/lib/request');

const IosRouter = require("./router/Application/IosCard");
const authrouting = require('./router/authentication/AuthRouting');

const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

const port = 5001;

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to the universal backend");
});

app.use("/api/ios", IosRouter);
app.use("/api/auth", authrouting);

app.listen(port, console.log("server is opened"));
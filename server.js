require('./models/db');

const express = require("express");
const path = require("path");
const exphns = require("express-handlebars");
const bodyparser = require("body-parser");

const employeeController = require("./controllers/employeeController");

var app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphns({extname:'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname+'/views/layouts/'}));
app.set("view engine", 'hbs');
app.listen(3000, () => {
    console.log("Express server stared at port 3000")
});

app.use('/employee', employeeController);
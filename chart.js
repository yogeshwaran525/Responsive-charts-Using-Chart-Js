const express = require('express');
const path = require('path');
const hbs = require('hbs');
const chart = require('chart.js');
const port = 3500;
const app = express();

   
const location =path.join(__dirname,"./public");
app.use(express.static(location));

// HTML files handle For view engine and hbd(handlebars)
app.set("view engine","hbs");
const htmlfilespath = path.join(__dirname+"/views/partials");
hbs.registerPartials(htmlfilespath);

app.use("/",require("./router/pages"));


app.listen(port,()=>{
    console.log("Server is listenong port  "+`${port}`)
});
var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser')

const xmlMiddleware = require('xml-express-middleware').xml;

app.use(xmlMiddleware({rootXmlKey: 'user'}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var cors = require('cors');

app.use(cors());

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, Accept, Content-Type, X-Requested-With");
    next();
});

var Routes = require('./router/routes');
Routes(app);

app.listen(port);

console.log("server is on");
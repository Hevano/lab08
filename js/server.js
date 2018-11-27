// https://expressjs.com/en/guide/routing.html


// REQUIRES
const lists = require('./data');
const express = require('express');
// as of Express 4, you need this:
// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const app = express();
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
    let doc = fs.readFileSync('../html/index.html', "utf8");
    //console.log(JSDOM);
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);


    res.send(dom.serialize());
});

app.use('/js', express.static('./'));
app.use('/css', express.static('../css'));
app.use('/img', express.static('../img'));

app.get('/ajax-GET-fruitfacts', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let fruit = req.query['fruit']; //The ajax request should include a fruit property that contains a number 0-9
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML(fruit);
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON(fruit);
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// for page not found (i.e., 404)
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})

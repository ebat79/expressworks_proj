/* ESERCIZIO 1

var express = require('express');
var app = express();

app.get('/home', function(req, res) {
    res.end('Hello World!');
}); */

/* ESERCIZIO 2
var express = require('express');
var app = express();

app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
*/

/* ESERCIZIO 3
var express = require('express');
var app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
}).listen(process.argv[2]);
*/

/* ESERCIZIO 4
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
}).listen(process.argv[2]);
*/

/* ESERCIZIO 5
var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);
*/

/* ESERCIZIO 6
var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){
  var id = req.params.id;
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  res.send(str);
});

app.listen(process.argv[2]);
*/

/* ESERCIZIO 7
var express = require('express');
var app = express();

app.get('/search', function(req, res){
  var query = req.query;
  res.send(query);
});

app.listen(process.argv[2]);
*/

/* ESERCIZIO 8 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
  var filename = process.argv[3];
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(books);
  })
});

app.listen(process.argv[2]);
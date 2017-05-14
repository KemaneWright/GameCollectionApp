var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var config = require('./config');



var app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.SESSION_SECRET
}))


var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./dbSetup');
dbSetup.run();




///////// Controllers ///////////
var gameCtrl = require('./controllers/gameCtrl');



//////// Game endpoints /////////
app.get('/api/games', gameCtrl.getAllGames);
app.get('/api/games/:id', gameCtrl.getGameDetails);

app.put('/api/games/like/:id', gameCtrl.like);
app.put('/api/games/dislike/:id', gameCtrl.dislike);

app.post('/api/games', gameCtrl.addGame);

app.delete('/api/games/delete/:id', gameCtrl.removeGame)





var port = config.PORT;
app.listen(port, function() {
    console.log('listening on ', port);
})

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

////////////  MASSIVE AND DB SETUP ////////////
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./dbSetup');
dbSetup.run();


// PASSPORT //
var passport = require('./passport');
app.use(passport.initialize());
app.use(passport.session());


// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};


///////// Controllers ///////////
var gameCtrl = require('./controllers/gameCtrl');
var authCtrl = require('./controllers/authCtrl');
var friendCtrl = require('./controllers/friendCtrl');




///////// Auth Endpoints ///////////
app.post('/api/login', passport.authenticate('local', {
	successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});
app.post('/api/register', authCtrl.register);
app.get('/api/me', isAuthed, authCtrl.me);
app.put('/api/user/current', isAuthed, authCtrl.updateCurrent);




//////// Game endpoints /////////
app.get('/api/games', gameCtrl.getAllGames);
app.get('/api/games/:id', gameCtrl.getGameDetails);

app.post('/api/gamez', gameCtrl.searchGames);

app.put('/api/games/like/:id', gameCtrl.like);
app.put('/api/games/dislike/:id', gameCtrl.dislike);

app.post('/api/games', gameCtrl.addGame);
app.delete('/api/games/delete/:id', gameCtrl.removeGame)


//////// Friend endpoints /////////
app.get('/api/friends', friendCtrl.getFriends);
app.get('/api/friends/:id', friendCtrl.getFriendProfile);







var port = config.PORT;
app.listen(port, function() {
    console.log('listening on ', port);
})

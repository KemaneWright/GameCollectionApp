var app = require('../index');
var db = app.get('db');

module.exports = {
    getAllGames: function(req, res) {
      // console.log('req user get games ', req.user)
        db.games.get_all_games([req.user.user_id], function(err, result) {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.send(result)
            }
        });
    },
    getGameDetails: function(req, res) {
        var id = req.params.id
        db.games.get_game_details([id], function(err, result) {
            if (err) {
                return res.status(500).send(err)
            } else {
                return res.send(result)
            }
        });
    },
    addGame: function(req, res) {
        console.log('add game server func');
        var game = req.body
        console.log('req user ', req.user);
        console.log('server game', game)
        db.games.add_game([game.image, game.title, game.genre, game.released, game.summary, req.user.user_id], function(err, game) {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.send(game)
                console.log('new game in database');
            }
        })
    },

    removeGame: function(req, res) {
      var id = req.params.id
      db.games.remove_game([id], function(err, response) {
        return res.status(200).send('Game deleted');
      })
    },


    like: function(req, res) {
      var id = req.params.id
      db.games.like([id], function(err, response) {
        // console.log('server ', response)
        return res.status(200).send(response);
      })
    },
    dislike: function(req, res) {
      var id = req.params.id
      db.games.dislike([id], function(err, response) {
        // console.log('server ', response)
        return res.status(200).send(response);
      })
    }







}

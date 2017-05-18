var app = require('../index');
var db = app.get('db');

module.exports = {
    getAllGames: function(req, res) {
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
        var game = req.body;
        db.games.add_game([game.image, game.title, game.genre, game.released, game.summary, req.user.user_id], function(err, game) {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.send(game)
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
            return res.status(200).send(response);
        })
    },
    dislike: function(req, res) {
        var id = req.params.id
        db.games.dislike([id], function(err, response) {
            return res.status(200).send(response);
        })
    },

    // searchGames: function(req, res) {
    //     console.log('res ', req.body)
    //     if (req.body.searchFilter.genre) {
    //       db.games.get_games_genre([req.body.searchFilter.genre, req.user.user_id], function(err, result) {
    //           if (err) {
    //             console.log('err ', err)
    //               return res.status(500).send(err)
    //           } else {
    //               console.log('result', result)
    //               res.json(result)
    //           }
    //       })
    //     } else if (req.body.searchFilter.title) {
    //       db.games.get_games_title([req.body.searchFilter.title, req.user.user_id], function(err, result) {
    //           if (err) {
    //             console.log('err ', err)
    //               return res.status(500).send(err)
    //           } else {
    //               console.log('result', result)
    //               res.json(result)
    //           }
    //       })
    //     } else if (req.body.searchFilter.dateReleased) {
    //       db.games.get_games_dateReleased([req.body.searchFilter.dateReleased, req.user.user_id], function(err, result) {
    //           if (err) {
    //             console.log('err ', err)
    //               return res.status(500).send(err)
    //           } else {
    //               console.log('result', result)
    //               res.json(result)
    //           }
    //       })
    //     }
    //     else if (req.body.searchFilter.likes) {
    //       db.games.get_games_likes([req.body.searchFilter.likes, req.user.user_id], function(err, result) {
    //           if (err) {
    //             console.log('err ', err)
    //               return res.status(500).send(err)
    //           } else {
    //               console.log('result', result)
    //               res.json(result)
    //           }
    //       })
    //     }
    // }

    searchGames: function(req, res) {
        if (req.query.genre) {
            db.games.get_games_genre([req.query.genre, 2], function(err, result) {
                if (err) {
                    console.log('err ', err)
                    return res.status(500).send(err)
                } else {
                    console.log('result', result)
                    res.json(result)
                }
            })
        } else if (req.query.title) {
            db.games.get_games_title([req.query.title, 2], function(err, result) {
                if (err) {
                    console.log('err ', err)
                    return res.status(500).send(err)
                } else {
                    console.log('result', result)
                    res.json(result)
                }
            })
        } else if (req.query.dateReleased) {
            db.games.get_games_dateReleased([req.query.dateReleased, 2], function(err, result) {
                if (err) {
                    console.log('err ', err)
                    return res.status(500).send(err)
                } else {
                    console.log('result', result)
                    res.json(result)
                }
            })
        } else if (req.query.likes) {
            db.games.get_games_likes([req.query.likes, 2], function(err, result) {
                if (err) {
                    console.log('err ', err)
                    return res.status(500).send(err)
                } else {
                    console.log('result', result)
                    res.json(result)
                }
            })
        }
    }

}

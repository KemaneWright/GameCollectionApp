var app = require('../index');
var db = app.get('db');

var friendsGames = {};


module.exports = {

    getFriends: function(req, res) {
        db.users.get_friends([req.user.user_id], function(err, result) {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.send(result)
            }
        })
    },
    getFriendProfile: function(req, res) {
        var id = req.params.id
        db.users.get_friend_profile([id], function(err, result) {
            if (err) {
                return res.status(500).send(err)
            }
            friendsGames.user = result[0]
            db.users.get_friend_games([id], function(err, games) {
                if (err) {
                    return res.status(500).send(err)
                } else {
                    friendsGames.games = games
                    // console.log(friendsGames)
                    return res.send(friendsGames)
                }
            });
        });
    }

}

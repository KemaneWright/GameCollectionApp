var app = require('../index');
var db = app.get('db');

module.exports = {
  getAllGames: function(req, res) {
    db.games.get_all_games([], function(err, result) {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(result)
      }
    });
  }
}

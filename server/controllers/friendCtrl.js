var app = require('../index');
var db = app.get('db');

module.exports = {

  getFriends: function(req, res) {
    db.users.get_friends([req.user.user_id], function(err, result) {
      if (err) {
        return res.status(500).send(err)
      } else {
        res.send(result)
      }
    })
  }


}

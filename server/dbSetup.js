var app = require('./index');
var db = app.get('db');
var config = require('./config');

var allowConsoleOutput = config.INITALIZE_LOG;
var log = function(input) {
  if(allowConsoleOutput) {
    console.log(input);
  }
}

module.exports = {
  run: function() {
    console.log('Initializing Database');

    db.build_tables(function(err, table) {
      if (err) return console.log('Error loading tables', err);
      else console.log('Tables loaded')
    })
  }

};

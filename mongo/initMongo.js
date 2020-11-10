const mongoose = require('mongoose');
let config = require('../config')
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`${config.mongo.url + config.mongo.database}`, {
  useNewUrlParser: true
});

module.exports = () => mongoose
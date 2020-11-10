const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

module.exports = (app) => {
    mongoose.connect(`${app.config.mongo.url + app.config.mongo.database}`, {
      useNewUrlParser: true
    });
    return mongoose
}
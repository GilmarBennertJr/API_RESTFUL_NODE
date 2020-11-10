module.exports = (app) => {
    const mongoose = new app.mongo.initMongo.Mongoose()   
    let collection_name = 'user'
    
    var schema = new mongoose.Schema({
            name: {
                type: String,
                required: [true, "Name is required"],
            },
            email: {
                type: String,
                required: [true, "Email is required"]
            },
            password: {
                type: String,
                required: [true, "Password is required"]
            }
        }, 
    { 
        versionKey: false, 
        collection: collection_name
    });    

    var model = app.mongo.initMongo.model(collection_name, schema)

    this.get = function (filter, callback) {
        var query = model.find(filter)
        query.exec((err, docs) => {
            callback(docs, err)
        })
    }

    return this
}
var jwt = require('jsonwebtoken');
module.exports = (app) => {
    const userCollection = app.mongo.collections.user

    app.post('/login', (req, res) => {
        let body = req.body

        if (body.email && body.password) {
            userCollection.get(body, (users, err) => {
                if (err) {
                    res.sendStatus(401)        
                } else {
                    if (users && users.length === 1) {
                        var token = jwt.sign({
                            un: app.util.Crypto.encrypt(users[0].name)
                        }, app.config.jwt_password);
                        res.send(`Bearer ${token}`)
                    } else {
                        res.sendStatus(401)
                    }
                }
            })
        } else {
            res.sendStatus(401)
        }        
    })
}
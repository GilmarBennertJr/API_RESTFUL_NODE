var jwt = require('jsonwebtoken');
module.exports = function (app) {
    app.use((req, res, next) => {
        let authorization = req.headers.authorization
        if (req.url === '/login') {
            if (!authorization) {                
                next()
            } else {
                res.sendStatus(204)
            }
        } else {
            if (authorization) {
                authorization = authorization.substring(7, authorization.length)                
                var auth_decoded = jwt.verify(authorization, app.config.jwt_password)                
                
                req.decoded = {
                    un: app.util.Crypto.decrypt(auth_decoded.un)
                }
                                
                next()
            } else {
                res.sendStatus(401)
            }
        }
    })
}
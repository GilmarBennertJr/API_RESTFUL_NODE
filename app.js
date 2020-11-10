let express = require("express")
let consign = require("consign")
let bodyParser = require("body-parser")
let cors = require('cors')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.new = function (object) {
    return JSON.parse(JSON.stringify(object));
}

consign()
    .then('config.js')
    .then('util')
    .then('mongo/initMongo.js')
    .then('middleware.js')
    .then('routes')    
    .into(app)

app.listen(app.config.express_port, function () {
    console.log(`servidor iniciado porta ${app.config.express_port}`)
})
module.exports = (app) => {
    app.get('/hello-world', (req, res) => {
        res.send({
            message: "Hello World!"
        })
    })

    app.get('/my-name', (req, res) => {
        let decoded = req.decoded

        res.send({
            message: `Your name is ${decoded.un}`
        })
    })
}
module.exports = (app) => {
    app.get('/hello-world', (req, res) => {
        res.send({
            message: "Hello World!"
        })
    })
}
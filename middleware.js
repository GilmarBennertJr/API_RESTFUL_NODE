module.exports = function (app) {
    // TODO - Criar processo de verificação de autenticação
    app.use((req, res, next) => {
        next()
    })
}
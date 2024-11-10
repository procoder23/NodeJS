function myMiddleware(req, res, next){
    console.log("This is custom middleware")
    next()
}

module.exports = myMiddleware
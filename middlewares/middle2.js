function middleware2(req, res, next){
    console.log("This is second middleware")
    next()
}

module.exports = middleware2
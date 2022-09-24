const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode ? res.statusCode : 500

    console.log('this is the status code ', statusCode);

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? NULL : err.stack

    })

}

module.exports = {
    errorHandler
}
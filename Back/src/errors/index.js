module.exports = app => {

    app.use((req, res, next) => {
        const error = new Error('This API Not Found');
        error.status = 404;
        next(error);
    });

    app.use((err, req, res, next) => {
        const status = err.status || 500;
        const message = err.message || 'Error processing your request';
        res.status(status).send({message});
    });
}
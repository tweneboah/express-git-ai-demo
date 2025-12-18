export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.stack);

    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

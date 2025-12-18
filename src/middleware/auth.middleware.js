export const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    // Placeholder logic: Check for a specific hardcoded API key
    if (apiKey && apiKey === 'secret-123') {
        next();
    } else {
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized: Invalid or missing API key'
        });
    }
};

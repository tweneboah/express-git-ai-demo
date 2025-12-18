export const getMetrics = (req, res) => {
    const memoryUsage = process.memoryUsage();
    res.status(200).json({
        uptime: process.uptime(),
        memory: {
            rss: Math.round(memoryUsage.rss / 1024 / 1024) + 'MB',
            heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + 'MB',
            heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + 'MB',
        },
        status: 'ok',
        timestamp: new Date().toISOString()
    });
};

import { readFile } from 'fs/promises';

const pkg = JSON.parse(
    await readFile(new URL('../../package.json', import.meta.url))
);

export const getAppInfo = (req, res) => {
    res.status(200).json({
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version
    });
};

// src/server.ts

import createApp from './app';

const startServer = async () => {
    const app = createApp();

    try {
        const port = process.env.PORT ? Number(process.env.PORT) : 3000;

        await app.listen({
            host: '0.0.0.0',
            port: port,
        });
        app.log.info(`Servidor iniciado em http://localhost:${port}`);
    } catch (exception) {
        app.log.error(`Este é o erro: ${exception}`);
        process.exit(1);
    }
};

startServer();

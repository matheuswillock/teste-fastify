import Fastify from 'fastify';
import registerRoutes from './controllers/routes';

const createApp = () => {
    const app = Fastify({logger: true})

// Chama a função para registrar as rotas
    registerRoutes(app);

    return app;
}

export default createApp;




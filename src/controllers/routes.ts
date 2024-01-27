import {FastifyInstance} from 'fastify';
import {z} from 'zod';
import validateUser from '../services/UserServices';

const registerRoutes = (app: FastifyInstance) => {
    // rota Get
    app.get('/', async (request, reply) => {
       reply
           .status(200)
           .send({
               message: "Hello World!"
           });
    });

    // Rota Post
    app.post('/', async (request, reply) => {
        const createSchema = z.object({
            name: z.string(),
            email: z.string().email()
        })

        const { name, email } = createSchema.parse(request.body)
        reply.status(201).send({
            message: 'Novo usuário criado com sucesso!',
            name: name,
            email: email
        })
    })

    app.post("/login", async (request, reply) =>{
        try {
            const createSchema = z.object({
                email : z.string().email(),
                password: z.string()
            })

            const { email, password } = createSchema.parse(request.body)

            const isValidUser = validateUser(email, password)

            if (isValidUser){
                return reply.status(200).send({message: `Usuário logado!`});
            }

            return reply.status(401).send();
        }
        catch (error: any) {
                app.log.error('Erro durante a autenticação:', error);
                reply.status(500).send({ message: 'Deculpe! Ocorreu um erro ao se autenticar.' });
        }
    })

};



export default registerRoutes;

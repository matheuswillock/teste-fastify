import validateUser from '../../../src/services/UserServices';

describe('validateUser', () => {
    it('deve retornar true para email e senha válidos', () => {
        const result = validateUser('teste@tes.com', '123');
        expect(result).toBe(true);
    });

    it('deve retornar false para email ou senha inválidos', () => {
        const result = validateUser('invalid@test.com', '456');
        expect(result).toBe(false);
    });
});

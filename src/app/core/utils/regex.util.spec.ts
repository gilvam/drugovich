import { RegexUtil } from './regex.util';

describe('RegexUtil', () => {
  it('deve retornar apenas números', () => {
    const value = 'a/b.c1';

    const response = RegexUtil.strip(value);

    expect(response).toEqual('1');
  });

  it('deve retornar números e letras', () => {
    const value = 'a/b.c1';

    const response = RegexUtil.strip(value, true);

    expect(response).toEqual('abc1');
  });

  it('deve retornar uma string limpa', () => {
    const value = '!@#$%ˆ&*()_+[{]}|\\';

    const response = RegexUtil.strip(value);

    expect(response).toEqual('');
  });
});

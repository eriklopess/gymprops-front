export default class Api {
  private static base: string = 'http://localhost:7777';

  public static login = () => {
    alert('login');
    return {
      name: 'Teste',
      cellphone: '123456789',
    };
  };
}

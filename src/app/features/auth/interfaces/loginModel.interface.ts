export class Usermanage {
  usuario: string;
  password: string;

  constructor(password: string, usuario: string, email: string) {
    this.password = password;
    this.usuario = usuario;
  }
}

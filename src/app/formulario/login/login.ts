import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuarioIngresado: string = '';
  contrasenaIngresada: string = '';

  private readonly usuarioCorrecto: string = 'admin';
  private readonly contrasenaCorrecta: string = '12345';

  mensajito: string = '';

  iniciarSesion(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      this.mensajito = 'El nombre de usuario no es válido.';
    } else if (this.contrasenaIngresada !== this.contrasenaCorrecta) {
      this.mensajito = 'La contraseña no es válida.';
    } else {
      this.mensajito = `Bienvenido al sistema, ${this.usuarioCorrecto}.`;
    }
  }
}

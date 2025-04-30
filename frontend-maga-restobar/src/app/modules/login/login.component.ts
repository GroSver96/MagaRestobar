import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

Component({
  selector: 'app-root',
  standalone: true,  // Hacerlo standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Maga Restobar';
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes llamar al backend más adelante
    if (this.email === 'admin@maga.com' && this.password === '1234') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/inicio']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { InicioComponent } from './modules/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
];

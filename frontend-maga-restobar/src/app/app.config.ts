import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const appRoutes: Routes = [
  { path: '', component: LoginComponent } // Puedes agregar más rutas según lo necesites
];

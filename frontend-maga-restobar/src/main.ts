import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // usa 'routes', como está exportado


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error('Error al iniciar la aplicación:', err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './modules/login/login.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/inicio/inicio.component'; // No es necesario declararlo

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,  // Importamos AppComponent como standalone
    LoginComponent  // Importamos LoginComponent directamente
  ],
  providers: [],
  declarations: [
    InicioComponent
  ],
  // No es necesario declarar ni bootstrap
})
export class AppModule { }

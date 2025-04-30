import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './modules/login/login.component';
import { AppComponent } from './app.component'; // No es necesario declararlo

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,  // Importamos AppComponent como standalone
    LoginComponent  // Importamos LoginComponent directamente
  ],
  providers: [],
  // No es necesario declarar ni bootstrap
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar esto

@Component({
  selector: 'app-root',
  standalone: true,  // Esta línea hace que el componente sea standalone
  imports: [RouterOutlet, HttpClientModule],  // Importamos el Router y HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-maga-restobar';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.testBackendConnection();
  }

  testBackendConnection() {
    this.http.get<{ message: string }>('/api/test')  // Sin el puerto
      .subscribe(
        (response) => {
          this.message = response.message;
          console.log('Conexión exitosa:', this.message);
        },
        (error) => {
          console.error('Error al conectar con el backend:', error);
        }
      );
  }
}


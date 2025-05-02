import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  horaActual: string = '';
  menu = [
    { nombre: 'Hamburguesa', precio: 25, cantidad: 0 },
    { nombre: 'Pizza', precio: 45, cantidad: 1 }
  ];
  empleados = [
    { nombre: 'Rudy' },
    { nombre: 'Julio' },
    { nombre: 'Ivan' }
  ];

  ngOnInit() {
    setInterval(() => {
      const ahora = new Date();
      this.horaActual = ahora.toLocaleTimeString();
    }, 1000);
  }

  incrementar(plato: any) {
    plato.cantidad++;
  }

  decrementar(plato: any) {
    if (plato.cantidad > 0) {
      plato.cantidad--;
    }
  }

  calcularTotal(): number {
    return this.menu.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  registrarIngreso(empleado: any) {
    console.log('Ingreso de', empleado.nombre);
    // Aquí llamarías a tu backend
  }

  registrarSalida(empleado: any) {
    console.log('Salida de', empleado.nombre);
    // Aquí llamarías a tu backend
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  // Datos ficticios de productos
  productos = [
    {idProducto: 1, codeNumber: 'P001', nombre: 'Producto 1', precio: 100, cantidad: 10},
    {idProducto: 2, codeNumber: 'P002', nombre: 'Producto 2', precio: 150, cantidad: 15},
    // ... más productos
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarAgregarProducto() {
    this.router.navigate(['/inventario/agregar']);
  }

}


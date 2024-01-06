// 1. Importamos los módulos y componentes necesarios
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importamos RouterModule y Routes para configurar las rutas
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule petitciones http para interactuar API BackEnd

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
// Importamos el nuevo componente InventarioComponent
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ClienteFormComponent } from './clientes/cliente-form.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InteresesComponent } from './intereses/intereses.component';
import { InteresFormComponent } from './intereses/interes-form.component';

// 2. Definimos las rutas de nuestra aplicación
// Cada objeto en este array define una ruta en nuestra aplicación
const routes: Routes = [
  // La ruta '' es la ruta raíz de la aplicación.
  // La propiedad `redirectTo` nos permite redirigir desde una ruta a otra.
  // En este caso, estamos redirigiendo cualquier acceso a la ruta raíz ('') a '/clientes'.
  // `pathMatch: 'full'` significa que la redirección se aplicará solo cuando la ruta completa es ''.
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // La ruta 'clientes' está asociada con el componente ClientesComponent.
  // Cuando los usuarios navegan a '/clientes', Angular renderizará el ClientesComponent.
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent, canActivate:[AuthGuard] },
  { path: 'clientes/clienteform', component: ClienteFormComponent },
  { path: 'clientes/clienteform/:id', component: ClienteFormComponent },
  { path: 'intereses', component: InteresesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteFormComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InteresesComponent,
    InteresFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  // Añadir ReactiveFormsModule a imports
    HttpClientModule,    // Añadir HttpClientModule a imports
    // 3. Configuramos las rutas utilizando RouterModule.forRoot()
    // Pasamos el array de rutas que definimos anteriormente.
    // Esto registra las rutas con Angular y las hace disponibles para su uso en toda la aplicación.
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  //se importan los servicios
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

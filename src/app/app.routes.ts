import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SuscribirseComponent } from './pages/suscribirse/suscribirse.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'suscribirse', component: SuscribirseComponent },
  { path: "", redirectTo: "home", pathMatch: "full"}
];
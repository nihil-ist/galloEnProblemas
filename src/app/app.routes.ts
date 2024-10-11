import { Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { CreditosComponent } from './creditos/creditos.component';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path:'',component:MenuComponent},
    {path: 'juego' ,component: JuegoComponent},
    {path: 'creditos' ,component: CreditosComponent},
    {path: 'opciones' ,component: OpcionesComponent}
];

import { Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { CreditosComponent } from './creditos/creditos.component';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { MenuComponent } from './menu/menu.component';
import { Juego1Component } from './juego1/juego1.component';
import { NivelCondicionalesComponent } from './nivel-condicionales/nivel-condicionales.component';
import { NivelFuncionesComponent } from './nivel-funciones/nivel-funciones.component';
import { Nivel3Component } from './nivel3/nivel3.component';
import { Nivel1Component } from './nivel1/nivel1.component';

export const routes: Routes = [
    {path:'', component: MenuComponent},
    {path: 'juego' ,component: JuegoComponent},
    {path: 'creditos' ,component: CreditosComponent},
    {path: 'opciones' ,component: OpcionesComponent},
    {path: 'juego1', component: Juego1Component},
    {path: 'condicionales', component: NivelCondicionalesComponent},
    {path: 'funciones', component: NivelFuncionesComponent},
    {path: 'ciclos', component: Nivel3Component},
    {path: 'variables', component: Nivel1Component},
    {path: '**', component:MenuComponent}
];

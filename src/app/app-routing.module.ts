import { ClientesCadastrarComponent } from './pages/clientes/clientes-cadastrar/clientes-cadastrar.component';
import { ClientesFiltroComponent } from './pages/clientes/clientes-filtro/clientes-filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cliente-filtro',
    component: ClientesFiltroComponent,
    children: []
  },
  {
    path: 'cliente-cadastrar',
    component: ClientesCadastrarComponent,
    children: []
  },
  {
    path: 'cliente-filtro',
    redirectTo: '/cliente-filtro',
    pathMatch: 'full'
  },
  {
    path: 'cliente-cadastrar',
    redirectTo: '/cliente-cadastrar',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

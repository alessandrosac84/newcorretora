import { ClientesCadastrarComponent } from './pages/clientes/clientes-cadastrar/clientes-cadastrar.component';
import { ClientesFiltroComponent } from './pages/clientes/clientes-filtro/clientes-filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/login',
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

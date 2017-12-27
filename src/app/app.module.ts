import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ClientesFiltroComponent } from './pages/clientes/clientes-filtro/clientes-filtro.component';
import { ClientesCadastrarComponent } from './pages/clientes/clientes-cadastrar/clientes-cadastrar.component';
import { LoginComponent } from './pages/login/login.component';
import { StatComponent } from './pages/shared/componentes/stat/stat.component';
import { DropdownComponent } from './pages/shared/componentes/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ClientesFiltroComponent,
    ClientesCadastrarComponent,
    LoginComponent,
    StatComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

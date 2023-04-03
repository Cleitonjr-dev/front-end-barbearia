import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './barbershop/agendamentos/agendamentos.component';
import { ServicosComponent } from './barbershop/servicos/servicos.component';
import { HomeComponent } from './barbershop/home/home.component';
import { EditComponent } from './barbershop/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'barbearia/home',
    pathMatch: 'full',
  },

  {
    path: 'barbearia',
    redirectTo: 'barbearia/home',
  },

  {
    path: 'barbearia/home',
    component: HomeComponent,
  },

  {
    path: 'barbearia/agendamentos',
    component: AgendamentosComponent,
  },

  {
    path: 'barbearia/servicos',
    component: ServicosComponent
  },

  {
    path: 'barbearia/editar',
    component: EditComponent
  },

  {
    path: 'barbearia/settings',
    component: ServicosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

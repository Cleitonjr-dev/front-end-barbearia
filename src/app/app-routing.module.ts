import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './barbershop/menu/menu.component';
import { AgendamentosComponent } from './barbershop/agendamentos/agendamentos.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ServicosComponent } from './barbershop/servicos/servicos.component';
import { HomeComponent } from './barbershop/home/home.component';
import { EditComponent } from './barbershop/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgendamentosComponent,
    ServicosComponent,
    HomeComponent,
    EditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

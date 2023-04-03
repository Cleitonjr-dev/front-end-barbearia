import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'barbearia/home' },
        { label: 'Agendamento', icon: 'pi pi-fw pi-calendar', routerLink: 'barbearia/agendamentos' },
        { label: 'Serviços', icon: 'pi pi-fw pi-file', routerLink: 'barbearia/servicos'},
        { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: 'barbearia/editar' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: 'barbearia/settings' }
    ];
}
}

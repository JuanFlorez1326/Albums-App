import { Component } from '@angular/core';
import { CustomRoutes } from '../../interfaces/routes.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public sidenavOptions: CustomRoutes[] = [
    {
      name: 'Create album',
      route: 'albums/create',
      icon: 'fas fa-plus'
    },
    {
      name: 'Lists albums',
      route: 'albums/list',
      icon: 'fas fa-tasks'
    }
  ];
}
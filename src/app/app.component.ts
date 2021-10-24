import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public loginService: LoginService) { }

  // token = localStorage.setItem('token', JSON.stringify({ name: '', loggedin: false })) 

  routerLinksArr = [
    { route: '/all', text: 'All EU Countries' },
    { route: '/log', text: 'Logs' },
    { route: '/maps', text: 'My Map' }
  ]

  title = 'countries-app';
}

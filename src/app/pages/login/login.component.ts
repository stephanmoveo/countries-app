import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) { }
  userMail: string = '';
  login() {
    if (this.userMail === "demo") {
      localStorage.setItem('token', JSON.stringify({ name: this.userMail, loggedin: true }))
      this.router.navigate(['all']);
    }
    else {
      alert('Unauthorized email address')
    }
  }

  ngOnInit(): void {
  }

}

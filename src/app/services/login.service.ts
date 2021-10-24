import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  token: any = localStorage.getItem('token') as any

  isLoggedIn() {
    const token = JSON.parse(localStorage.getItem('token') as any)
    return (
      token === null || token.loggedin === false ? false : true
    )
  }
}



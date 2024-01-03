import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  private apiUrl = 'http://localhost:5112/api';
  currentUser: any = new BehaviorSubject(null);
  userRole: string = '';

  constructor(private myhttp: HttpClient, private _Router: Router) {}

  selectedRoleType(role: string): string {
    this.userRole = role;
    return this.userRole;
  }

  register(User: any): Observable<any> {
    return this.myhttp.post(`${this.apiUrl}/Account/Register`, User);
  }

  login(User: any): Observable<any> {
    return this.myhttp.post(`${this.apiUrl}/Account/Login`, User);
  }

  id: any = `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier`;

  getToken() {
    let token: any = localStorage.getItem('userInfo');
    this.currentUser = jwtDecode(token);
  }

  getTokenID(): string {
    let token: any = localStorage.getItem('userInfo');
    this.currentUser = jwtDecode(token);
    var nameIdentifier =
      this.currentUser[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ];
    console.log(nameIdentifier);
    return nameIdentifier;
  }

  getName(): string {
    let token: any = localStorage.getItem('userInfo');
    this.currentUser = jwtDecode(token);
    var nameIdentifier =
      this.currentUser[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    console.log(nameIdentifier);
    return nameIdentifier;
  }

  getRole(): string {
    let token: any = localStorage.getItem('userInfo');
    this.currentUser = jwtDecode(token);
    var userRole =
      this.currentUser[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    console.log(userRole);
    return userRole;
  }

  LogOut() {
    localStorage.removeItem('userToken');
    this.currentUser = null;
    this._Router.navigate(['/login']);
  }
}

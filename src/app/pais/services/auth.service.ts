import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { AuthResponse, User } from '../interfaces/interfaces';
import { map, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _user!: User;

  get usuario(){
    return {...this._user}
  }

  constructor(private http:HttpClient) { }

  login(username:string, password: string  ){
    const url = `${this.baseUrl}/auth/signin`
    const body = { username, password}
   return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp =>{ 
          if(resp.id){
            this._user = {
              id: resp.id!,
              username: resp.username!,
              email: resp.email!,
              roles: resp.roles!,
            }
          }
          console.log(resp)
          }
        ),
      map (resp =>  true   ),
      catchError(err => of(false))
    )
  }
}

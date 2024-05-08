import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

// Interfaces
import { User as Auth0User } from '@auth0/auth0-angular'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly prefix = `/api/user`;

  private http = inject(HttpClient);

  getByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.prefix}/email/${email}`)
  }

  create(user: Auth0User): Observable<User> {
    const body = {
      firstName: user.given_name,
      lastName: user.family_name,
      userName: user.nickname,
      email: user.email,
    }
    return this.http.post<User>(`${this.prefix}`, body)
  }
}

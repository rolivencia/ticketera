import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from '../interfaces/user.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly prefix = `http://localhost:4200/api/user`;

  private http = inject(HttpClient);

  getByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.prefix}/${email}`)
  }
}

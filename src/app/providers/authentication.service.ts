import { inject, Injectable } from '@angular/core';
import { User as Auth0User } from '@auth0/auth0-angular'
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs'
import { UserService } from './user.service'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = new BehaviorSubject<User | null>(null);
  private userService = inject(UserService);

  findOrCreate(auth0User: Auth0User): Observable<User> {
    if(!auth0User.email) {
      throw new Error('User email not found');
    }

    return this.userService.getByEmail(auth0User.email)
        .pipe(
            switchMap(result => {
              return result ? of(result) : this.userService.create(auth0User);
            }),
            tap(user => this.currentUser$.next(user))
        );
  }

  logout() {
    this.currentUser$.next(null);
  }

}

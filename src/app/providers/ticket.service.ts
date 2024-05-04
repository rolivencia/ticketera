import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly prefix = `http://localhost:4000/api/ticket`;

  constructor(private http: HttpClient){}

  public getTicketByID(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.prefix}/${id}`)
  }
}

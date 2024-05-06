import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private http = inject(HttpClient);
  private readonly prefix = `http://localhost:4200/api/ticket`;

  getTicketByID(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.prefix}/${id}`)
  }

  getAllTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.prefix}`)
  }
}

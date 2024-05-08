import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Ticket } from '../interfaces/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private http = inject(HttpClient);
  private readonly prefix = `/api/ticket`;

  getTicketByID(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.prefix}/${id}`)
  }

  getAllTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.prefix}`)
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http
        .post<Ticket[]>(`${this.prefix}`, ticket)
        .pipe(map((result => result[0])))
  }
}

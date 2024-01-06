// cliente-interes.service.ts
import { Injectable } from '@angular/core';
import { clienteInteres } from './cliente-interes';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteInteresService {

  private urlEndPoint: string = 'http://localhost:8080/api/cliente-intereses';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getClientesInteres(): Observable<clienteInteres[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as clienteInteres[]))
  }

  create(clienteInteres: clienteInteres): Observable<clienteInteres> {
    return this.http.post<clienteInteres>(this.urlEndPoint, clienteInteres, { headers: this.httpHeaders })
  }

  getClienteInteres(id: number): Observable<clienteInteres> {
    return this.http.get<clienteInteres>(`${this.urlEndPoint}/${id}`)
  }

  update(clienteInteres: clienteInteres): Observable<clienteInteres> {
    return this.http.put<clienteInteres>(`${this.urlEndPoint}/${clienteInteres.id}`, clienteInteres, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<clienteInteres> {
    return this.http.delete<clienteInteres>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }
}

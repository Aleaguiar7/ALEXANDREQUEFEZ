import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  
  apiUrl = 'http://localhost:8080/api/pedido';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.apiUrl, this.httpOptions);
  }

  findById(id_pedido: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.apiUrl}/${id_pedido}`, this.httpOptions);
  }

  insert(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.apiUrl, pedido, this.httpOptions);
  }

  remove(id_pedido: number): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(`${this.apiUrl}/${id_pedido}`, this.httpOptions);
  }

  update(pedido: Pedido): Observable<Pedido> {
    const { id_pedido, quantidade, cliente, item } = pedido;
    const updatedPedido: Pedido = new Pedido(id_pedido, quantidade, cliente, item);

    return this.httpClient.put<Pedido>(`${this.apiUrl}/${id_pedido}`, updatedPedido, this.httpOptions);
  }
}

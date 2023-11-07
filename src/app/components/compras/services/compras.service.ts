import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Compras } from 'src/app/shared/models/compras.model';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Customer } from 'src/app/shared/models/customer.model';
import { Item } from 'src/app/shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  apiUrl = 'http://localhost:8080/api/pedido';
  apiUrl2 = 'http://localhost:8080/api/cliente';

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  findById(_id_customer: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiUrl2}/${_id_customer}`, this.httpOptions);
  }

  listPedidosByIdCustomer(id_customer: number): Observable<Pedido[]> {
    const params = new HttpParams().set('id_customer', id_customer.toString());
    return this.httpClient.get<Pedido[]>(this.apiUrl, { params });
  }

  getAllPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.apiUrl, this.httpOptions);
  }
  
  }

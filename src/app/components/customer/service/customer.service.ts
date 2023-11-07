import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:8080/api/cliente';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiUrl, this.httpOptions);
  }

  findById(_id_customer: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiUrl}/${_id_customer}`, this.httpOptions);
  }

  insert(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiUrl, JSON.stringify(customer), this.httpOptions);
  }

  remove(_id_customer: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.apiUrl}/${_id_customer}`, this.httpOptions);
  }

  update(customer: Customer): Observable<Customer> {
    const { id_customer, firstName, secondName } = customer;
    const updatedCustomer: Customer = new Customer(id_customer, firstName, secondName);
  
    return this.httpClient.put<Customer>(`${this.apiUrl}/${id_customer}`, updatedCustomer, this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model'; // Importe o modelo do Item

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = 'http://localhost:8080/api/item'; // Atualize a URL da API de acordo com a sua API de itens

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.apiUrl, this.httpOptions);
  }

  findById(id_item: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.apiUrl}/${id_item}`, this.httpOptions);
  }

  insert(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.apiUrl, JSON.stringify(item), this.httpOptions);
  }

  remove(id_item: number): Observable<Item> {
    return this.httpClient.delete<Item>(this.apiUrl+"/"+id_item, this.httpOptions);
  }

  update(item: Item): Observable<Item> {
    const { id_item, nome_item, valor } = item;
    const updatedItem: Item = new Item(id_item, nome_item, valor);
  
    return this.httpClient.put<Item>(`${this.apiUrl}/${id_item}`, updatedItem, this.httpOptions);
  }
}

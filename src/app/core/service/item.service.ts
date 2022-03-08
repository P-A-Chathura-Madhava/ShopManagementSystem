import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import CustomerDTO from "../model/CustomerDTO";
import {Observable} from "rxjs";
import ItemDTO from "../model/ItemDTO";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public saveItem(data: ItemDTO): Observable<any>{
    return this.http.post(this.url + 'item/saveItem', {
      code: data.code,
      description: data.description,
      unitPrice: data.unitPrice,
      qtyOnHand: data.qtyOnHand
    });
  }

  public updateItem(data: ItemDTO): Observable<any>{
    return this.http.put(this.url + 'item/updateItem', {
      code: data.code,
      description: data.description,
      unitPrice: data.unitPrice,
      qtyOnHand: data.qtyOnHand
    });
  }

  public deleteItem(code: string): Observable<any>{
    return this.http.delete(this.url + 'item/deleteItem', {
      headers: {code}
    });
  }

  public searchItem(code: string): Observable<any>{
    return this.http.get(this.url + 'item/searchItem', {
      headers: {code}
    });
  }

  public getAllItems(): Observable<any>{
    return this.http.get(this.url + 'item/getAllItems');
  }
}

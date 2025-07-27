import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { serverurl } from '../config/server';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/cart")
    }
    insert(ct:Cart):Observable<Cart>
    {
      return this.http.post<Cart>(serverurl+"/cart",ct)
    }
  
    deletereg(i:any):Observable<any>
    {
      return this.http.delete(serverurl+"/cart/"+i)
    }
    update(i:any,ct:Cart):Observable<Cart>
    {
      return this.http.put<Cart>(serverurl+"/cart/"+i,ct)
    }
    search(i:any):Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/register"+i)
    }
    searchem(em:any):Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/cartemail/"+em)
    }
}

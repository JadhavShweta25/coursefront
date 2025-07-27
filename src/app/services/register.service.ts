import { Injectable } from '@angular/core';
import { serverurl } from '../config/server';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Register[]>
  {
    return this.http.get<Register[]>(serverurl+"/register")
  }
  insert(r:Register):Observable<Register>
  {
    return this.http.post<Register>(serverurl+"/register",r)
  }

  deletereg(i:any):Observable<any>
  {
    return this.http.delete(serverurl+"/register"+i)
  }
  update(i:any,r:Register):Observable<Register>
  {
    return this.http.put<Register>(serverurl+"/register/"+i,r)
  }
  search(i:any):Observable<Register[]>
  {
    return this.http.get<Register[]>(serverurl+"/register"+i)
  }
  searchemailid(emailid:any):Observable<Register[]>
  {
    return this.http.get<Register[]>(serverurl+"/register"+emailid)
  }
  login(emailid:any,password:any):Observable<Register[]>
  {
    return this.http.get<Register[]>(serverurl+"/register/"+emailid+"/"+password)
  }
}

import { Injectable } from '@angular/core';
import { serverurl } from '../config/server';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adminlogin } from '../models/adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  login(uname:any,password:any):Observable<Adminlogin[]>
  {
    return this.http.get<Adminlogin[]>(serverurl+"/admin/"+uname+"/"+password)
  }
}

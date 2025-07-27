import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { Observable } from 'rxjs';
import { serverurl } from '../config/server';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Feedback[]>
    {
      return this.http.get<Feedback[]>(serverurl+"/feedback")
    }
    insert(r:Feedback):Observable<Feedback>
    {
      return this.http.post<Feedback>(serverurl+"/feedback",r)
    }
  
    deletereg(i:any):Observable<any>
    {
      return this.http.delete(serverurl+"/feedback"+i)
    }
    update(i:any,r:Feedback):Observable<Feedback>
    {
      return this.http.put<Feedback>(serverurl+"/feedback/"+i,r)
    }
    search(i:any):Observable<Feedback[]>
    {
      return this.http.get<Feedback[]>(serverurl+"/feedback"+i)
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes';
import { serverurl } from '../config/server';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Notes[]>
      {
        return this.http.get<Notes[]>(serverurl+"/notes")
      }
      insert(r:Notes):Observable<Notes>
      {
        return this.http.post<Notes>(serverurl+"/notes",r)
      }
    
      deletereg(i:any):Observable<any>
      {
        return this.http.delete(serverurl+"/notes"+i)
      }
      update(i:any,r:Notes):Observable<Notes>
      {
        return this.http.put<Notes>(serverurl+"/notes/"+i,r)
      }
      search(i:any):Observable<Notes[]>
      {
        return this.http.get<Notes[]>(serverurl+"/notes"+i)
      }
      searchcourse(i:any):Observable<Notes[]>
      {
        return this.http.get<Notes[]>(serverurl+"/coursenotes/"+i)
      }
}

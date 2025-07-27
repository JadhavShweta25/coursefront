import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { serverurl } from '../config/server';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private http: HttpClient) { }

  createCourse(course:FormData): Observable<Object> {

    return this.http.post(serverurl+"/courses",course);
  }
  getAll(){
        return this.http.get<Course[]>(serverurl+"/courses");
      }
      deletecourse(id:number)
    {
      return this.http.delete(serverurl+"/courses/"+id)
    }
    search(i:any):Observable<Course[]>
    {
      return this.http.get<Course[]>(serverurl+"/coursesid/"+i)
    }
}

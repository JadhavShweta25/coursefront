import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MylearningService } from '../services/mylearning.service';
import { Mylearning } from '../models/mylearning';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-viewcart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mylearning.component.html',
  styleUrl: './mylearning.component.css'
})
export class MylearningComponent implements OnInit {
  marr:Mylearning[]=[]
  selcourse:Course[]=[]
  constructor(private couserv:CourseService, private router:Router,private ms:MylearningService,private ns:NotesService)
{
  
}
ngOnInit(): void {
  this.getSelectedCourses()  
}

getSelectedCourses()
{
  let em=localStorage.getItem("emailid")
  //searching in cart for particular user
  this.ms.searchemailid(em).subscribe(data=>{
    if (data.length > 0)
    {
      this.marr=data
      //getting each course details 
     for(let c of this.marr)
     {
      this.couserv.search(c.courseid).subscribe(data=>{
        if(data.length>0)
        {
          //pushing course details in selected course array
          this.selcourse.push(data[0])
         }
        }) 
        }
       }
      })
     }
     viewnotes(cid:any)
     {
      this.router.navigate(["/viewnotes",cid])
     }
     }




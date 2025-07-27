import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../services/notes.service';
import { Notes } from '../models/notes';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mngnotes',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mngnotes.component.html',
  styleUrl: './mngnotes.component.css'
})
export class MngnotesComponent implements OnInit {
note:Notes=new Notes()
carr:Course[]=[]
cid:any=""
constructor(private ms:NotesService,private cs:CourseService)
{

}
ngOnInit(): void {
 this.cs.getAll().subscribe(data=>{
  if(data.length>0)
  {
    this.carr=data
  }
 }) 
}
submitdata()
{
  this.ms.insert(this.note).subscribe(data=>{
    if(data!=null)
      alert("Manage Notes successfully")
  })
}
showid()
{
  this.note.courseid=this.cid
}
}



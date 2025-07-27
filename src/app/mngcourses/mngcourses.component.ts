import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filehandle } from '../models/filehandle';

@Component({
  selector: 'app-mngcourses',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mngcourses.component.html',
  styleUrl: './mngcourses.component.css'
})
export class MngcoursesComponent {
b:Course=new Course()

  constructor(private bs:CourseService,private router:Router,private sanitizer:DomSanitizer)
  {
    
  }
  submitdata()
  {
    const formData=this.prepareFormData(this.b);
    this.bs.createCourse(formData).subscribe(data => {
      if(data!=null)
        alert("Course added successfully")
      console.log(data)
    },
    error =>{ console.log(error);
      
    })
  }
  prepareFormData(course: Course):FormData {
    const formData=new FormData()
    formData.append(
      'course',
      new Blob([JSON.stringify(course)],{type:"application/json"})
    );
    for(var i=0; i<course.courseImages.length; i++)
    {
      formData.append(
        'imageFile',
        course.courseImages[i].file,
        course.courseImages[i].file.name
      );
    }
    return formData;
  }
  removeImage(i:number)
  {
   this.b.courseImages.splice(i,1)
  }
onFileSelected(event:any){
  if(event.target.files)
  {
    const file=event.target.files[0];
    const fileHandle:Filehandle={
      file:file,
      url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
      name:file.name
    }
    this.b.courseImages.push(fileHandle)
  }
  }
}

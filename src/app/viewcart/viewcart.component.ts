import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MylearningService } from '../services/mylearning.service';
import { Mylearning } from '../models/mylearning';

@Component({
  selector: 'app-viewcart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcart.component.html',
  styleUrl: './viewcart.component.css'
})
export class ViewcartComponent implements OnInit {
  carr:Cart[]=[]
  selcourse:Course[]=[]
  constructor(private cs:CartService,private couserv:CourseService, private router:Router,private ms:MylearningService)
{
  
}
ngOnInit(): void {
  this.getSelectedCourses()  
}
delcourse(co:any)
{
  this.cs.deletereg(co.cartid).subscribe(data=>{
    this.getSelectedCourses()
    this.router.navigate(["/"])
    
  })
}
getSelectedCourses()
{
  let em=localStorage.getItem("emailid")
  this.selcourse = [];
  if (em) {
  //searching in cart for particular user
  
  this.cs.searchem(em).subscribe(data=>{
    if(data.length>0)
    {
     this.carr=data
     //getting each course details 
     for(let c of this.carr)
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
}
confirm(co:any)
  {
  let mo:Mylearning=new Mylearning()
  mo.courseid=co.courseid
  mo.emailid=localStorage.getItem("emailid")
  this.ms.insert(mo).subscribe(data=>{
    if(data!=null)
    {
     this.cs.deletereg(co.cartid).subscribe(data=>{
    this.getSelectedCourses()
    this.router.navigate(["/"])
  })
    }
  })
  }
}


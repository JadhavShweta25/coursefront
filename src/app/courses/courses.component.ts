import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  isLoggedIn=false
  carr:Course[]=[]

  constructor(private cs:CourseService,private cartcs:CartService)
  {

  }
  ngOnInit():void {
    this.isLoggedIn=localStorage.getItem("emailid")!=null
    this.cs.getAll().subscribe(data=> {
      if(data.length>0)
      {
        this.carr=data
        console.log(JSON.stringify(this.carr))
      }
    })
  }
  addcart(c:Course)
  {
    let cartob=new Cart()
    cartob.emailid=localStorage.getItem("emailid")
    cartob.courseid=c.courseid
  this.cartcs.insert(cartob).subscribe(data=>{
    if(data!=null)
    {
      alert("Course Added to cart")
    }
  })
  }
}

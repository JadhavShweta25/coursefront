import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
 feed:Feedback=new Feedback()
 farr:Feedback[]=[]
 isLoggedIn=false
 constructor(private fs:FeedbackService)
  {
 
  }
  ngOnInit():void {
   this.isLoggedIn=(localStorage.getItem('emailid')!=null)
   this.fs.getAll().subscribe(data=>{
    if(data.length>0)
    {
      this.farr=data
    }
   }) 
  }
  
   submitdata()
   {
    this.feed.emailid=localStorage.getItem("emailid")
     this.fs.insert(this.feed).subscribe(data=>{
     if(data!=null)
       alert("Feedback successfully Submitted") 
      })
   }
 }
 
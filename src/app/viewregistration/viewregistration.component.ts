import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewregistration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewregistration.component.html',
  styleUrl: './viewregistration.component.css'
})

export class ViewregistrationComponent implements OnInit{
rarr:Register[]=[]
constructor(private rs:RegisterService){
 
}
ngOnInit():void {
  this.rs.getAll().subscribe(data=>{
    if(data.length>0)
      this.rarr=data
  })

}
}

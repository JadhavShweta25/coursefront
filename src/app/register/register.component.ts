import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  reg:Register=new Register()
  constructor(private rs:RegisterService)
  {

  }

  submitdata()
  {
    this.rs.insert(this.reg).subscribe(data=>{
    if(data!=null)
      alert("Registration successful") 
     })
  }
}

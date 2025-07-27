import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reg:Register=new Register()
  constructor(private rs:RegisterService,private router:Router)
  {

  }
  submitdata()
  {
  this.rs.login(this.reg.emailid,this.reg.password).subscribe(data=>{
    if(data.length>0)
    {
      alert("Login Successful")
      localStorage.setItem("emailid",this.reg.emailid)
      localStorage.setItem("name",data[0].name)
      this.router.navigate(['/'])
    }
    else
    alert("Invalid Emailid or password")
  })
  }
}

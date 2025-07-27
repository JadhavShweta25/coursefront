import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adminlogin } from '../models/adminlogin';
import { AdminloginService } from '../services/adminlogin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  adm:Adminlogin=new Adminlogin()
  constructor(private ads:AdminloginService,private router:Router)
  {

  }
  submitdata()
  {
    console.log(JSON.stringify(this.adm))
    this.ads.login(this.adm.uname,this.adm.password).subscribe(data=>{
    console.log(JSON.stringify(data))
    if(data.length>0)
    {
      alert("Login Successful")
      localStorage.setItem("uname",this.adm.uname)
      this.router.navigate(['/'])
    }
     else
    alert("Invalid uname")
  })
  }
}

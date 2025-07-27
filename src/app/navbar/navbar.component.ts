import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
usertype="guest"
constructor(private router:Router)
{

}
  ngOnInit(): void {
    this.router.events.subscribe(url=>{
      if(url!=null)
      {
        let em=localStorage.getItem("emailid")
        if(em!=null)
        {
          this.usertype="user"
        }
        else
        {
        var un=localStorage.getItem("uname")
        if(un!=null)
          this.usertype='admin'
        else
          this.usertype='guest'
        }
         
      }
      })
  }
  logout()
  {
    localStorage.removeItem("emailid")
    localStorage.removeItem("name")
    this.router.navigate(["/"])

  }
  alogout()
  {
    localStorage.removeItem("uname")

    this.router.navigate(["/"])

  }
}

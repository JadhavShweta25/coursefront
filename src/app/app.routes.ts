import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { MylearningComponent } from './mylearning/mylearning.component';
import { MngcoursesComponent } from './mngcourses/mngcourses.component';
import { ViewregistrationComponent } from './viewregistration/viewregistration.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { MngnotesComponent } from './mngnotes/mngnotes.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},

    {path:'',component:HomeComponent},
    {path:'courses',component:CoursesComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'viewcart',component:ViewcartComponent},
    {path:'mylearning',component:MylearningComponent},
    {path:'mngcourses',component:MngcoursesComponent},
    {path:'viewregistration',component:ViewregistrationComponent},
    {path:'vieworders',component:ViewordersComponent},
    {path:'viewfeedback',component:ViewfeedbackComponent},
    {path:'mngnotes',component:MngnotesComponent},
    {path:'adm',component:AdminloginComponent},
    {path:'viewnotes/:cid',component:ViewnotesComponent},
    {path:'**',redirectTo:'home',pathMatch:'full'}, 
    
    
];

import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewnotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewnotes.component.html',
  styleUrl: './viewnotes.component.css'
})
export class ViewnotesComponent implements OnInit {
  no:Notes[]=[]
  cid=0
  constructor(private ns:NotesService,private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.cid=this.route.snapshot.params["cid"]
    this.getnotes()
  }
  getnotes()
  {
   this.ns.searchcourse(this.cid).subscribe(data=>{
    console.log(data)
    if(data.length>0)
    {
      this.no=data
    }
   }) 
  }
}

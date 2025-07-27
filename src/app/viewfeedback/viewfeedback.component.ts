import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-viewfeedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewfeedback.component.html',
  styleUrl: './viewfeedback.component.css'
})
export class ViewfeedbackComponent {
  farr:Feedback[]=[]
  constructor(private fs:FeedbackService){
 
  }
  ngOnInit(): void {
  this.fs.getAll().subscribe(data => {
    this.farr = data.filter(f => f.emailid && f.message); // removes empty records
  });
}
}
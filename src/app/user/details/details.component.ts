import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ProjectsComponent, NgOptimizedImage],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}

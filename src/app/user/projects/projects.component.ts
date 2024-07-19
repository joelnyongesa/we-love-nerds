import { Component, OnInit } from '@angular/core';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = projects;

  constructor() {}

  ngOnInit(): void {
    
  }
}

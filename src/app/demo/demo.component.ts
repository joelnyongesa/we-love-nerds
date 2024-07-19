import { Component, } from '@angular/core';
import { ContactComponent } from "../core/contact/contact.component";
import { DetailsComponent } from '../user/details/details.component';
import { ProjectsComponent } from '../user/projects/projects.component';
import { ProjectsSkeletonComponent } from '../user/projects-skeleton/projects-skeleton.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ContactComponent, DetailsComponent, ProjectsComponent, ProjectsSkeletonComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  
}

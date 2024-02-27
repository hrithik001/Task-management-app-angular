import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectname',
  standalone: true,
  imports: [],
  templateUrl: './projectname.component.html',
  styleUrl: './projectname.component.css',
})
export class ProjectnameComponent {
  @Input() projectName!: string;
}

import { Component, Input } from '@angular/core';
import { Task } from '../../Interfaces/task';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css',
})
export class ShowTaskComponent {
  @Input() taskData!: Task;
}

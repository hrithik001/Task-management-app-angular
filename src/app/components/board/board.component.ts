import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../Interfaces/board';
import { NgFor, NgIf } from '@angular/common';
import { ShowTaskComponent } from '../show-task/show-task.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgIf, NgFor, ShowTaskComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  @Input() showproject!: Board;
  @Output() addnewTask = new EventEmitter<void>();
  show() {
    console.log(this.showproject);
  }
  // title: string = 'hrihikl';
  addTask() {
    this.addnewTask.emit();
  }
}

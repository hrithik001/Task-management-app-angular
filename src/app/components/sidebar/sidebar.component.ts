import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../Interfaces/board';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectnameComponent } from '../projectname/projectname.component';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule, ProjectnameComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() boardData!: Board[];
  @Input() activeProject!: Board | void;
  @Output() selectActive = new EventEmitter<number>();
  @Output() addBoard = new EventEmitter<Board>();
  addProject() {
    this.addBoard.emit();
  }
  selectProject(projectIndex: number) {
    this.selectActive.emit(projectIndex);
  }
}

import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogBoxComponent } from '../DialogBoxes/board-dialog-box/board-dialog-box.component';
import { Board } from '../../Interfaces/board';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, BoardDialogBoxComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() textToShow!: string;
  @Input() board: Board[] = [];
  constructor(public dialog: MatDialog) {}
  openProjectAddDialog() {
    const dialogRef = this.dialog.open(BoardDialogBoxComponent, {
      data: { board: this.board },
    });
  }
  // reciveNewProjectName(newProjectName:string)
  // {
  //   console.log('from parent'+newProjectName);
  // }
}

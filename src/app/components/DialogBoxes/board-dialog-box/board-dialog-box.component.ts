import { Component, Inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Board } from '../../../Interfaces/board';
import { FetchDataService } from '../../../services/fetch-data.service';

@Component({
  selector: 'app-board-dialog-box',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,

    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './board-dialog-box.component.html',
  styleUrl: './board-dialog-box.component.css',
})
export class BoardDialogBoxComponent {
  projectName!: string;
  board: Board[] = [];
  currentLength: number = this.fectchData.getBoardData().length;

  constructor(
    private fectchData: FetchDataService,
    private dialogRef: MatDialogRef<BoardDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { board: Board }
  ) {
    console.log('from board component');
  }

  addProjectName() {
    const newproject = {
      name: this.projectName,
      // projectId: this.currentLength,
      // isActive: false,
      columns: [
        {
          name: 'Todo',
          tasks: [],
        },
        {
          name: 'InProgress',
          tasks: [],
        },
        {
          name: 'InReview',
          tasks: [],
        },
        {
          name: 'Completed',
          tasks: [],
        },
      ],
    };
    // this.board.push(newproject);
    console.log(newproject);

    this.dialogRef.close(newproject);
  }
}

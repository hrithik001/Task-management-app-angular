import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Task } from '../../../Interfaces/task';
import { Columns } from '../../../Interfaces/columns';
interface TaskStatus {
  label: string;
  value: string;
}
@Component({
  selector: 'app-task-dialog-box',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './task-dialog-box.component.html',
  styleUrl: './task-dialog-box.component.css',
})
export class TaskDialogBoxComponent {
  statusOptions: TaskStatus[] = [
    { label: 'To Do', value: 'Todo' },
    { label: 'In Progress', value: 'InProgress' },
    { label: 'In Review', value: 'InReview' },
    { label: 'Completed', value: 'Completed' },
  ];

  taskName!: string;
  taskStatus!: string;
  taskStartingDate!: string;
  taskDueDate!: string;

  constructor(
    private dialogRef: MatDialogRef<TaskDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      task: Task;

      columns: Columns[];
    }
  ) {}

  addTask() {
    // console.log('submitted');

    // console.log(this.taskName);
    // console.log(this.taskStartingDate);
    // console.log(this.taskDueDate);
    // console.log(this.taskStatus);

    const newTask = {
      title: this.taskName,
      startingDate: this.taskStartingDate,
      finishDate: this.taskDueDate,
      status: this.taskStatus,
    };
    console.log({ ...newTask });
    this.dialogRef.close({ ...newTask });
  }
}

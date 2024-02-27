import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FetchDataService } from './services/fetch-data.service';
import { Board } from './Interfaces/board';
import { MatDialog } from '@angular/material/dialog';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoardComponent } from './components/board/board.component';
import { BoardDialogBoxComponent } from './components/DialogBoxes/board-dialog-box/board-dialog-box.component';
import { TaskDialogBoxComponent } from './components/DialogBoxes/task-dialog-box/task-dialog-box.component';
import { Task } from './Interfaces/task';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    BoardDialogBoxComponent,
    TaskDialogBoxComponent,
    BoardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'newtodo';
  boardData = this.fetchDataService.boardData;
  activeProject = this.fetchDataService.getActiveProject;
  activeProjectIndex = this.fetchDataService.activeIndex;

  constructor(
    public fetchDataService: FetchDataService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    console.log('inside intin');
    console.log(this.activeProject());
  }

  selectActive(projectIndex: number) {
    this.fetchDataService.selectActiveBoard(projectIndex);
    console.log(projectIndex);
  }
  addBoard() {
    const dialogBox = this.dialog.open(BoardDialogBoxComponent, {
      data: {
        name: '',

        columns: [],
      },
    });
    dialogBox.afterClosed().subscribe((data: Board) => {
      if (!data) return;
      this.fetchDataService.addBoard(data);
    });
  }

  addTask(): void {
    const dialogRef = this.dialog.open(TaskDialogBoxComponent, {
      data: {
        columns: this.activeProject()?.columns,
      },
    });

    dialogRef.afterClosed().subscribe((res: Task) => {
      if (!res) {
        return;
      }
      console.log(res);
      this.fetchDataService.addTask(res);
    });
  }
}

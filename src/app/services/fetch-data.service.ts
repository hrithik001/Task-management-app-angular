import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Board } from '../Interfaces/board';
import { Task } from '../Interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  boardData = signal<Board[]>([
    {
      name: 'Freelance Project',
      // projectId: 1,
      // isActive: true,
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Build UI for onboarding flow',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
              status: 'Todo',
            },
            {
              title: 'Build UI for search',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
              status: 'Todo',
            },
          ],
        },
        {
          name: 'InProgress',
          tasks: [
            {
              title: 'Design settings and search pages',

              status: 'InProgress',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Add account management endpoints',

              status: 'InProgress',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
          ],
        },
        {
          name: 'InReview',
          tasks: [
            {
              title: 'Conduct 5 wireframe tests',
              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Create wireframe prototype',
              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Review results of usability tests and iterate',
              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Research the market',
              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
          ],
        },
        {
          name: 'Completed',
          tasks: [
            {
              title:
                'Create paper prototypes and conduct 10 usability tests with potential customers',

              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Market discovery',
              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Competitor analysis',

              status: 'InReview',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
          ],
        },
      ],
    },
    {
      name: 'SBI Outsource',
      // projectId: 2,
      // isActive: false,
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Plan Product Hunt launch',

              status: 'Todo',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Share on Show HN',

              status: '',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Write launch article to publish on multiple channels',

              status: '',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
          ],
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
    },
    {
      name: 'HPCL Project 1',
      // projectId: 3,
      // isActive: false,
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Launch version one',

              status: '',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
            {
              title: 'Review early feedback and plan next steps for roadmap',
              status: '',

              startingDate: '1/8/2020',
              finishDate: '2/8/2020',
            },
          ],
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
    },
  ]);
  activeIndex = signal(0);

  constructor() {}

  getBoardData() {
    return this.boardData;
  }
  getActiveProject = computed(() => {
    return this.boardData()[this.activeIndex()];
  });

  selectActiveBoard(index: number) {
    this.activeIndex.set(index);
  }
  addBoard(project: Board): void {
    this.boardData.update((data) => [...data, project]);

    this.selectActiveBoard(this.boardData().length - 1);
  }

  addTask(task: Task) {
    // console.log('in service');
    // console.log(task);
    this.boardData.update((boards) =>
      boards.map((board) =>
        board === this.getActiveProject()
          ? {
              ...board,
              columns: board.columns.map((column) => ({
                ...column,
                tasks:
                  column.name === task.status
                    ? [...column.tasks, task]
                    : column.tasks,
              })),
            }
          : board
      )
    );
  }
}

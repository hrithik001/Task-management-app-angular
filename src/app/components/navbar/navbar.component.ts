import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../Interfaces/board';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() activeBoard!: Board | void;
  @Input() boardData!: Board[];
  constructor() {
    console.log('im in nav bar');
    console.log(this.activeBoard);
  }
}

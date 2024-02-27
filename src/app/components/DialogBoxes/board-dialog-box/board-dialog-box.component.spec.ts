import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDialogBoxComponent } from './board-dialog-box.component';

describe('BoardDialogBoxComponent', () => {
  let component: BoardDialogBoxComponent;
  let fixture: ComponentFixture<BoardDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardDialogBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

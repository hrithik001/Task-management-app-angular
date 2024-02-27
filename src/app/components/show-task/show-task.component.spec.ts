import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaskComponent } from './show-task.component';

describe('ShowTaskComponent', () => {
  let component: ShowTaskComponent;
  let fixture: ComponentFixture<ShowTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

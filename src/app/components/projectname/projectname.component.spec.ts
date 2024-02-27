import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectnameComponent } from './projectname.component';

describe('ProjectnameComponent', () => {
  let component: ProjectnameComponent;
  let fixture: ComponentFixture<ProjectnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

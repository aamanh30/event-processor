import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookPageComponent } from './gradebook-page.component';

describe('GradebookPageComponent', () => {
  let component: GradebookPageComponent;
  let fixture: ComponentFixture<GradebookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

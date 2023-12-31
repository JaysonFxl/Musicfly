import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEditorComponent } from './review-editor.component';

describe('ReviewEditorComponent', () => {
  let component: ReviewEditorComponent;
  let fixture: ComponentFixture<ReviewEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

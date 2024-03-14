import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserModalComponentComponent } from './view-user-modal-component.component';

describe('ViewUserModalComponentComponent', () => {
  let component: ViewUserModalComponentComponent;
  let fixture: ComponentFixture<ViewUserModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewUserModalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUserModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

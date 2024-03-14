import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserModalComponentComponent } from './remove-user-modal-component.component';

describe('RemoveUserModalComponentComponent', () => {
  let component: RemoveUserModalComponentComponent;
  let fixture: ComponentFixture<RemoveUserModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveUserModalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveUserModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

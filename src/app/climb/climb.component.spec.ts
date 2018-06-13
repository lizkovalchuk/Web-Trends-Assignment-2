import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbComponent } from './climb.component';

describe('ClimbComponent', () => {
  let component: ClimbComponent;
  let fixture: ComponentFixture<ClimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

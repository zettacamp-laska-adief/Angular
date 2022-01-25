import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorInputComponent } from './actor-input.component';

describe('ActorInputComponent', () => {
  let component: ActorInputComponent;
  let fixture: ComponentFixture<ActorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

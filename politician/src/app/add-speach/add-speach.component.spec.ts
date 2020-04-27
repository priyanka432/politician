import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeachComponent } from './add-speach.component';

describe('AddSpeachComponent', () => {
  let component: AddSpeachComponent;
  let fixture: ComponentFixture<AddSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

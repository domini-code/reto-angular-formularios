import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReactiveComponent } from './contact-reactive.component';

describe('ContactReactiveComponent', () => {
  let component: ContactReactiveComponent;
  let fixture: ComponentFixture<ContactReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiComponent } from './email-verifi.component';

describe('EmailVerifiComponent', () => {
  let component: EmailVerifiComponent;
  let fixture: ComponentFixture<EmailVerifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

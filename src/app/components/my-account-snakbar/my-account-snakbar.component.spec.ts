import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountSnakbarComponent } from './my-account-snakbar.component';

describe('MyAccountSnakbarComponent', () => {
  let component: MyAccountSnakbarComponent;
  let fixture: ComponentFixture<MyAccountSnakbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountSnakbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

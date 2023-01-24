import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YatesComponent } from './yates.component';

describe('YatesComponent', () => {
  let component: YatesComponent;
  let fixture: ComponentFixture<YatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

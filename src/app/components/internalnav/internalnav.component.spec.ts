import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalnavComponent } from './internalnav.component';

describe('InternalnavComponent', () => {
  let component: InternalnavComponent;
  let fixture: ComponentFixture<InternalnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

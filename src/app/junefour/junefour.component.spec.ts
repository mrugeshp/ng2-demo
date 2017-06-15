import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunefourComponent } from './junefour.component';

describe('JunefourComponent', () => {
  let component: JunefourComponent;
  let fixture: ComponentFixture<JunefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

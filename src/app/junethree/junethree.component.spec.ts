import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunethreeComponent } from './junethree.component';

describe('JunethreeComponent', () => {
  let component: JunethreeComponent;
  let fixture: ComponentFixture<JunethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

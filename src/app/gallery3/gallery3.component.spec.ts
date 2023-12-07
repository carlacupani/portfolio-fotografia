import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery3Component } from './gallery3.component';

describe('Gallery3Component', () => {
  let component: Gallery3Component;
  let fixture: ComponentFixture<Gallery3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery3Component]
    });
    fixture = TestBed.createComponent(Gallery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

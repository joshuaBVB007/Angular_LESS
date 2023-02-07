import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkifyComponent } from './okify.component';

describe('OkifyComponent', () => {
  let component: OkifyComponent;
  let fixture: ComponentFixture<OkifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

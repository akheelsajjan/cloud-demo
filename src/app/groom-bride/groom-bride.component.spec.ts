import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomBrideComponent } from './groom-bride.component';

describe('GroomBrideComponent', () => {
  let component: GroomBrideComponent;
  let fixture: ComponentFixture<GroomBrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroomBrideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroomBrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

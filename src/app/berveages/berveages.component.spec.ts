import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerveagesComponent } from './berveages.component';

describe('BerveagesComponent', () => {
  let component: BerveagesComponent;
  let fixture: ComponentFixture<BerveagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerveagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerveagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

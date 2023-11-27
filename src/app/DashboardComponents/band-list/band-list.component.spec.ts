import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandListComponent } from './band-list.component';

describe('BandListComponent', () => {
  let component: BandListComponent;
  let fixture: ComponentFixture<BandListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandListComponent]
    });
    fixture = TestBed.createComponent(BandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

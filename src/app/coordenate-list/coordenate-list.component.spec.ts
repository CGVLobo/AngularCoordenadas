import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenateListComponent } from './coordenate-list.component';

describe('CoordenateListComponent', () => {
  let component: CoordenateListComponent;
  let fixture: ComponentFixture<CoordenateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

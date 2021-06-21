import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactaComponent } from './update-contacta.component';

describe('UpdateContactaComponent', () => {
  let component: UpdateContactaComponent;
  let fixture: ComponentFixture<UpdateContactaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

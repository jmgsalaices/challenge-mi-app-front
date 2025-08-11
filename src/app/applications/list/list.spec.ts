import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsListComponent } from './list';

describe('List', () => {
  let component: ApplicationsListComponent;
  let fixture: ComponentFixture<ApplicationsListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

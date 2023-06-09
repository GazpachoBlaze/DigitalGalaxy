import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomiesComponent } from './homies.component';

describe('HomiesComponent', () => {
  let component: HomiesComponent;
  let fixture: ComponentFixture<HomiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

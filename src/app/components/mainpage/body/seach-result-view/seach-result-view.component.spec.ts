import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachResultViewComponent } from './seach-result-view.component';

describe('SeachResultViewComponent', () => {
  let component: SeachResultViewComponent;
  let fixture: ComponentFixture<SeachResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachResultViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

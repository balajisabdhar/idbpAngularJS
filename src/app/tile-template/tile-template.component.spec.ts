import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTemplateComponent } from './tile-template.component';

describe('TileTemplateComponent', () => {
  let component: TileTemplateComponent;
  let fixture: ComponentFixture<TileTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

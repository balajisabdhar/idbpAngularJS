import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbpComponentComponent } from './idbp-component.component';

describe('IdbpComponentComponent', () => {
  let component: IdbpComponentComponent;
  let fixture: ComponentFixture<IdbpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdbpComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdbpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

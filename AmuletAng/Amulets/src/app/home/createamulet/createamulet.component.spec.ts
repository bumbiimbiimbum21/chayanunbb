import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateamuletComponent } from './createamulet.component';

describe('CreateamuletComponent', () => {
  let component: CreateamuletComponent;
  let fixture: ComponentFixture<CreateamuletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateamuletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateamuletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

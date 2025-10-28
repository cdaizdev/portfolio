import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbox } from './cardbox';

describe('Cardbox', () => {
  let component: Cardbox;
  let fixture: ComponentFixture<Cardbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

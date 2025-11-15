import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soundmeter } from './soundmeter';

describe('Soundmeter', () => {
  let component: Soundmeter;
  let fixture: ComponentFixture<Soundmeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soundmeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soundmeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

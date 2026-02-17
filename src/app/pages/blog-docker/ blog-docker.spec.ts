import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDocker } from './blog-docker';

describe('BlogDocker', () => {
  let component: BlogDocker;
  let fixture: ComponentFixture<BlogDocker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDocker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDocker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

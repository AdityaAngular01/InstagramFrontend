import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTagsPostsComponent } from './user-tags-posts.component';

describe('UserTagsPostsComponent', () => {
  let component: UserTagsPostsComponent;
  let fixture: ComponentFixture<UserTagsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTagsPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTagsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

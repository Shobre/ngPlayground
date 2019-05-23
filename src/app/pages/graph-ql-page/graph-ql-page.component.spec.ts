import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLPageComponent } from './graph-ql-page.component';

describe('GraphQLPageComponent', () => {
  let component: GraphQLPageComponent;
  let fixture: ComponentFixture<GraphQLPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphQLPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

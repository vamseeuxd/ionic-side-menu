import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardsPage } from './vertical-cards.page';

describe('VerticalCardsPage', () => {
  let component: VerticalCardsPage;
  let fixture: ComponentFixture<VerticalCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardsPage } from './horizontal-cards.page';

describe('HorizontalCardsPage', () => {
  let component: HorizontalCardsPage;
  let fixture: ComponentFixture<HorizontalCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

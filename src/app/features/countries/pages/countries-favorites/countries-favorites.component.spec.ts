import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFavoritesComponent } from './countries-favorites.component';

describe('CountriesFavoritesComponent', () => {
  let component: CountriesFavoritesComponent;
  let fixture: ComponentFixture<CountriesFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesFavoritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

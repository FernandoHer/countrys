import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [],
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries:Country[] = [];
}

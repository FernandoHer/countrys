import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries:Country[] = [];
}

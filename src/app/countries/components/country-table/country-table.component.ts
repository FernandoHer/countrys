import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries:Country[] = [];
}

import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-by-region-page',
    standalone: true,
    templateUrl: './by-region-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ){}

  searchByCapital( term:string){
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;  
      })

  }
}

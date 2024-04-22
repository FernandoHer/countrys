import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialterm: string = ''; 

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialterm = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term:string){
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;  
      })

  }

}

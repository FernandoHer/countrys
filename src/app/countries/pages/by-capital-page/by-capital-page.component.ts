import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-by-capital-page',
    standalone: true,
    templateUrl: './by-capital-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isloading: boolean = false;
  public initialterm: string = ''; 

  constructor( private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialterm = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term:string){
    this.isloading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isloading = false;  
      })

  }


}

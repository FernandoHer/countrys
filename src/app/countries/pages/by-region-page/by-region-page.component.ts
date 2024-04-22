import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';


@Component({
    selector: 'app-by-region-page',
    standalone: true,
    templateUrl: './by-region-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent, CommonModule]
})



export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectRegion?: Region;

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectRegion = this.countriesService.cacheStore.byRegion.term;
  }

  searchByRegion( term: Region){
    this.selectRegion= term;
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;  
      })

  }
}

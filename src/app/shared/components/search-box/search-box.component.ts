import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
  searchInput!:ElementRef<HTMLInputElement>;
  
  @Input()
  public placeholder:string = "";
  
  @Output()
  public onValue = new EventEmitter();


  onKeyEnter(){
    const newSearch = this.searchInput.nativeElement.value;
    this.onValue.emit(newSearch);
  }


}

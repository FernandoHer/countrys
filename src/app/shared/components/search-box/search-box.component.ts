import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscribe?: Subscription;

  @Input()
  public initialValue: string = "";

  @Input()
  public placeholder:string = "";
  
  @Output()
  public onValue = new EventEmitter();
  
  @Output()
  public onDebounce = new EventEmitter();


 ngOnInit(): void {
  console.log('DATA', this.initialValue)
    this.debouncerSuscribe = this.debouncer
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscribe?.unsubscribe();
  }
  
  


  emitValue( value: string): void {
    this.onValue.emit( value);
  }


  onKeyPress(searchTerm:string){
    this.debouncer.next( searchTerm );
  }


}

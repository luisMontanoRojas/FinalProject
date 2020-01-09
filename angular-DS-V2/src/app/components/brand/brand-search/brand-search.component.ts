import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-brand-search',
  templateUrl: './brand-search.component.html',
  styleUrls: ['./brand-search.component.css']
})
export class BrandSearchComponent implements OnInit {
  @Output() searchBrand: EventEmitter<any> = new EventEmitter();

  body:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const body:string = this.body;

    this.searchBrand.emit(body);
  }
}

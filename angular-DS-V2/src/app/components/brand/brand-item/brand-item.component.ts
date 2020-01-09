import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DealerShipService } from '../../../services/dealer-ship.service'

import { CarBrand } from 'src/app/models/CarBrand';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {
  @Input() carbrand:CarBrand;
  @Output() deleteBrand:EventEmitter<CarBrand>=new EventEmitter();

  constructor(private dealershipService:DealerShipService, private router:  Router ) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      carbrand: true
    }

    return classes;
  }

  onDelete(carbrand){
    this.deleteBrand.emit(carbrand);
    this.dealershipService.deleteBrand(carbrand).subscribe();
  }
  onModels(carbrand){
    this.router.navigateByUrl(`carbrand/${carbrand.id}/carmodels`);///ojo
  }
  onEdit(carbrand:CarBrand){
    this.router.navigateByUrl(`carbrand/${carbrand.id}`);
  }
}

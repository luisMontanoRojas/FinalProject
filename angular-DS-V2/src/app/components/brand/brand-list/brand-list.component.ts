import { Component, OnInit } from '@angular/core';
import { DealerShipService } from '../../../services/dealer-ship.service'

import { CarBrand } from '../../../models/CarBrand'

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  carbrands:CarBrand[];
  
  constructor(private dealershipService : DealerShipService) { }

  ngOnInit() {
    this.dealershipService.getBrands().subscribe(carBrands => {
      this.carbrands = carBrands;
    });
  }

  searchBrand(body: string) {
    if (body != null) {
      this.carbrands = this.carbrands.filter(m => m.name.includes(body));
    }
    if (body == "") {
      this.dealershipService.getBrands().subscribe(carBrands => {
        this.carbrands = carBrands;
      });
    }
  }
  brandadd(carbrand:CarBrand){
    this.dealershipService.brandadd(carbrand).subscribe(carbrand=>{
      this.carbrands.push(carbrand);
    })
  }

  deleteBrand(carbrand:CarBrand){
    this.carbrands=this.carbrands.filter(m=>m.id !== carbrand.id);
    this.dealershipService.deleteBrand(carbrand).subscribe();
  }

}

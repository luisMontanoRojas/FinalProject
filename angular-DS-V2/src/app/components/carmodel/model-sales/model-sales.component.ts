import { Component, OnInit } from '@angular/core';
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { CarModel } from 'src/app/models/CarModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-sales',
  templateUrl: './model-sales.component.html',
  styleUrls: ['./model-sales.component.css']
})
export class ModelSalesComponent implements OnInit {
  carmodels:CarModel[];

  constructor(private dealershipService : DealerShipService, private route:ActivatedRoute) { }

  ngOnInit() {
    const brandId="1";
    this.dealershipService.getModelsSales(brandId).subscribe(carmodels => {
      this.carmodels = carmodels;
     });
  }

}

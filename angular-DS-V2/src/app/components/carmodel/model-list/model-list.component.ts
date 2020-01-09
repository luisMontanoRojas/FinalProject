import { Component, OnInit } from '@angular/core';
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { CarModel } from 'src/app/models/CarModel';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  carmodels:CarModel[];
  // private routeSub:Subscription;
  // idCarBrand:Number;

  constructor(private dealershipService : DealerShipService, private route:ActivatedRoute) { }
   
  ngOnInit() {    
    const brandId=this.route.snapshot.paramMap.get("brandId");
    this.dealershipService.getModels(brandId).subscribe(carmodels => {
      this.carmodels = carmodels;
     });
     
    }
    deleteModel(carmodel:CarModel){
      const brandId=this.route.snapshot.paramMap.get("brandId");
      this.carmodels=this.carmodels.filter(m=>m.id !== carmodel.id);
      this.dealershipService.deleteModel(brandId,carmodel).subscribe();
    }

    modeldadd(carmodel:CarModel){
      console.log(carmodel);
      const brandId=this.route.snapshot.paramMap.get("brandId");
      carmodel.carBrandId=Number(brandId);
      this.dealershipService.modeladd(brandId,carmodel).subscribe(carmodel=>{
      this.carmodels.push(carmodel);
      })
    }

  
}

import { Component, OnInit } from '@angular/core';;
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/CarModel';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit {
  modelo:CarModel;

  constructor(private dealerService:DealerShipService,private route:ActivatedRoute) { }

  ngOnInit() {
    const brandId=this.route.snapshot.paramMap.get("brandId");
    const modelId=this.route.snapshot.paramMap.get("modelId");
    this.dealerService.getModel(brandId,modelId).subscribe(m=>{
      this.modelo=m
    })
  }

  onSubmit(modelo:CarModel){
    const brandId=this.route.snapshot.paramMap.get("brandId");

    modelo.carBrandId=Number(brandId);
    console.log(modelo);
    
    this.dealerService.toggleCompletedModel(brandId,modelo).subscribe(t=>{
      console.log(t);
    })
  }

}

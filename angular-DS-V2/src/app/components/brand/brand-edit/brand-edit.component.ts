import { Component, OnInit } from '@angular/core';
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { ActivatedRoute } from '@angular/router';
import { CarBrand } from 'src/app/models/CarBrand';


@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  brand:CarBrand;
  constructor(private dealerService:DealerShipService,private route:ActivatedRoute) { }

  ngOnInit() {
    const brandId=this.route.snapshot.paramMap.get("brandId");
    this.dealerService.getBrand(brandId).subscribe(m=>{
      this.brand=m
    })
  }
  onSubmit(carbrand:CarBrand){
    this.dealerService.toggleCompleted(carbrand).subscribe(t=>{
      console.log(t);
    })
  }

}

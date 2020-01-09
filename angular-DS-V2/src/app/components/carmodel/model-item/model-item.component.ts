import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/CarModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.css']
})
export class ModelItemComponent implements OnInit {
  @Input() carmodel:CarModel;
  @Output() deleteModel:EventEmitter<CarModel>=new EventEmitter();
  constructor(private dealershipService:DealerShipService, private router:  Router,private route:ActivatedRoute ) { }

  ngOnInit() {
  }
  setClasses() {
    let classes = {
      carmodel: true
    }
    return classes;
  }
  onDelete(carmodel){
    this.deleteModel.emit(carmodel);
    this.dealershipService.deleteBrand(carmodel).subscribe();
  }
  onEditM(carmodel:CarModel){
    const brandId=this.route.snapshot.paramMap.get("brandId");
    this.router.navigateByUrl(`carbrand/${brandId}/carmodels/${carmodel.id}`);
  }
}

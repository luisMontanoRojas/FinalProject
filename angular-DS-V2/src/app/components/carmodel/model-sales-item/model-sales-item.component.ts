import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DealerShipService } from 'src/app/services/dealer-ship.service';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/CarModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-sales-item',
  templateUrl: './model-sales-item.component.html',
  styleUrls: ['./model-sales-item.component.css']
})
export class ModelSalesItemComponent implements OnInit {
  @Input() carmodel:CarModel;

  constructor(private dealershipService:DealerShipService, private router:  Router,private route:ActivatedRoute ) { }

  ngOnInit() {
  }
  
  setClasses() {
    let classes = {
      carmodel: true
    }
    return classes;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  id: number;
  name: string;
  urlImage: string;
  year : number;
  displacement : number;
  horsePower : number;
  weight : number;
  transmission : string;
  basicPrice : number;
  carBrandId : number;

  @Output() modeldadd: EventEmitter<any> = new EventEmitter();

  // form =new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   displacement:new FormControl('',Validators.maxLength(4)),
  //   horsePower: new FormControl('',Validators.maxLength(4)),
  //   year:new FormControl('',Validators.maxLength(4))
  // })

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    
    const carModels = {
      name: this.name,
      urlImage: this.urlImage,
      displacement: this.displacement,
      horsePower: this.horsePower,
      weight: this.weight,
      transmission: this.transmission,
      basicPrice: this.basicPrice,
      carBrandId: this.carBrandId
    }
    this.modeldadd.emit(carModels);

  }

}

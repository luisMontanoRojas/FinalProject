import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{trigger,state,style,transition,animate,keyframes}from '@angular/animations';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
  
})
export class BrandAddComponent implements OnInit {
  
  name: string;
  nationality: string;
  url_logo_image : number;
  facebook : number;
  ubication : number;
  about : number;
  oficialPage : string;
  state:string='small';
  @Output() brandadd:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const carbrand={
      name:this.name,
      nationality:this.nationality,
      url_logo_image:this.url_logo_image,
      facebook:this.facebook,
      ubication:this.ubication,
      about:this.about,
      oficialPage:this.oficialPage
    }
    this.brandadd.emit(carbrand);
  }
  
  animateMe(){
  this.state=(this.state==='small' ? 'large ':'small');
  }

}

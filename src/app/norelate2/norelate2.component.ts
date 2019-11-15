import { Component, OnInit } from '@angular/core';
import { EventtransferService } from '../eventtransfer.service';

@Component({
  selector: 'app-norelate2',
  templateUrl: './norelate2.component.html',
  styleUrls: ['./norelate2.component.css']
})
export class Norelate2Component implements OnInit {
  receivedfromcomponent1:string;
  receivedfromcomponent2:string="Datafrom norelate component 2";
  constructor(public pdtser:EventtransferService) { }

  ngOnInit() {

         this.pdtser.commmondata1.subscribe((data:any)=>{
           this.receivedfromcomponent1=data;
           debugger;
           console.log(this.receivedfromcomponent1)
         })
  }


}

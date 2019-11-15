import { Component, OnInit } from '@angular/core';
import { EventtransferService } from '../eventtransfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-norelate1',
  templateUrl: './norelate1.component.html',
  styleUrls: ['./norelate1.component.css']
})
export class Norelate1Component implements OnInit {
  receivedfromcomponent2: string = 'hellofrom i supplied data';
  constructor(public pdtser: EventtransferService, private router: Router) { }
  ngOnInit() {

  }
  sendToCmpd2() {

    this.pdtser.commmondata1.next(this.receivedfromcomponent2);
    this.router.navigate(['/nore2'])
  }

}

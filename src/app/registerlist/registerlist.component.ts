import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventtransferService } from '../eventtransfer.service';
@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {
  @Input() receivedParentMessage: string;
  Userdata: any = [];
  receivedfromcomponent1: string;
  constructor(
    private router: Router,
    private pdtser: EventtransferService

  ) { }

  ngOnInit() {
    debugger;
    this.pdtser.registerlist.subscribe((data: any) => {
      debugger;
      console.log(data)
      this.Userdata = data;
      console.log(this.Userdata)
    });
    //this.Userdata = JSON.parse(localStorage.getItem('Userdata'));

  }
  editdetails(data, i) {
    localStorage.setItem('Editdata', JSON.stringify(data));
    localStorage.setItem('i', JSON.stringify(i));
    this.router.navigate(['/register'])
  }
  Delete(i) {
    this.Userdata.splice(i, 1);
    localStorage.setItem("Userdata", JSON.stringify(this.Userdata));
  }
  backnav() {
    localStorage.removeItem('Editdata');
    this.router.navigate(['/register'])
  }
}

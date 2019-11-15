import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  receivedChildMessage: string;
  messageToSendP: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  sendToChild(message: string) {
    this.messageToSendP = message;
    this.router.navigate(['/child'])
  }
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
}

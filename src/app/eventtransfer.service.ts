import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventtransferService {
  commmondata1 = new Subject();
  registerlist = new Subject();
  constructor() { }



}

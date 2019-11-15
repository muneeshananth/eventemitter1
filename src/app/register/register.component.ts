import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventtransferService } from '../eventtransfer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName: string;
  LastName: string;
  Country: string;
  Subject: string;
  registerForm: FormGroup;
  submitted = false;
  Userdata: any = []
  CheckData: any = [];
  Editdata: any = [];
  buttontext = "Save";
  i: any;
  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    public pdtser:EventtransferService
  ) {

  }

  ngOnInit() {
    this.Editdata = JSON.parse(localStorage.getItem('Editdata'));
    this.i = localStorage.getItem('i');
    this.CheckData = JSON.parse(localStorage.getItem('Userdata'));
    this.registerForm = this.FormBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      country: [Validators.required],
      Gender: [''],
      subject: ['', Validators.required],
    });
    if (this.Editdata != null) {
      this.buttontext = "Update";
      this.Updatedata(this.Editdata);
    }
    else {
      this.buttontext = "Save";
      this.registerForm.reset();
    }
  }
  get f() { return this.registerForm.controls; }
  saverecord() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else {
      if (this.buttontext == "Save") {
        var data = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          Country: this.Country,
          Subject: this.Subject
        }
        this.Userdata.push(data);
        if (this.CheckData != null) {
          this.CheckData.push(data);
          this.router.navigate(['/registerlist'])
          this.pdtser.registerlist.next(this.CheckData);
          //localStorage.setItem('Userdata', JSON.stringify(this.CheckData));
       
        }
        else {
          localStorage.setItem('Userdata', JSON.stringify(this.Userdata));
          this.router.navigate(['/registerlist'])
        }

      }
      else {
        var data = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          Country: this.Country,
          Subject: this.Subject
        }
        debugger;
        if (this.CheckData != null) {
          this.CheckData.splice(this.i, 1);
          this.CheckData.push(data);
          localStorage.setItem('Userdata', JSON.stringify(this.CheckData));
          this.router.navigate(['/registerlist'])
        }
        else {
          localStorage.setItem('Userdata', JSON.stringify(this.Userdata));
          this.router.navigate(['/registerlist'])
        }
      }

    }
  }

  Updatedata(Editdata) {
    this.FirstName = Editdata.FirstName;
    this.LastName = Editdata.LastName;
    this.Country = Editdata.Country;
    this.Subject = Editdata.Subject;
    this.i = this.i;
  }
  backnavlist() {
    this.router.navigate(['/registerlist']);
  }
  OnlyCharacter(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && charCode != 32){
            return false;
            return true;
      }
}
}
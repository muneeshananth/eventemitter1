import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Norelate1Component } from './norelate1/norelate1.component';
import { Norelate2Component } from './norelate2/norelate2.component';
import { ParentComponent } from './parent/parent.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterlistComponent,
    ChildComponent,
    Norelate1Component,
    Norelate2Component,
    ParentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

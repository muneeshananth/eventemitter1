import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { ChildComponent } from './child/child.component';
import { Norelate1Component } from './norelate1/norelate1.component';
import { Norelate2Component } from './norelate2/norelate2.component';
import { ParentComponent } from './parent/parent.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [

   {path:'',redirectTo:'/registerlist',pathMatch:'full'},
   {
   path:'register',component:RegisterComponent,
  },
  {
    path:'registerlist',component:RegisterlistComponent
  },
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'nore1',component:Norelate1Component},
  {path:'nore2',component:Norelate2Component},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

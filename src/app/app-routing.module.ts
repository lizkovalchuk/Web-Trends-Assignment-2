import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ClimbComponent } from './climb/climb.component';
import { PoolComponent } from './pool/pool.component'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component'

const routes: Routes = [
  {path: 'climb', component: ClimbComponent},
  {path : 'pool', component: PoolComponent}
]

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []

  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],

})
export class AppRoutingModule { }

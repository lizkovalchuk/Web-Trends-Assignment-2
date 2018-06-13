import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoolComponent } from './pool/pool.component';
import { ClimbComponent } from './climb/climb.component';

@NgModule({
  declarations: [
    AppComponent,
    PoolComponent,
    ClimbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

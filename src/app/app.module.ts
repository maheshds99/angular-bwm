import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalModule } from './rental/rental.module';
import { TempComponent } from './temp/temp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

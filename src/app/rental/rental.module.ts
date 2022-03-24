import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RentalListItemComponent } from "./rental-list-item/rental-list-item.component";
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalComponent } from "./rental.component";
import { RentalService } from "./shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes1: Routes = [
  {
    path:'rentals',
    component:RentalComponent,
    children:[
      {
        path:'',component:RentalListComponent,
      },
      {
        path:':rentalId',component:RentalDetailComponent,
      },
    ]

  },

];


@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes1)
  ],
  declarations:[
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  providers:[RentalService],
  exports:[
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ]


})


export class RentalModule{}

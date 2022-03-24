import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];
  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {


   const rentalObservable = this.rentalService.getRentals()
   rentalObservable.subscribe(
     (rentals:Rental[]) => {
      this.rentals = rentals;
     },
     (err:any) => {

     },
     () => {

     }
   )
  }

}

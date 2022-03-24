import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  rental!: Rental
  currentId!: string ;
  constructor(private route: ActivatedRoute,
     private rentalService: RentalService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['rentalId']
      this.getRental(this.currentId)
    })
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental
        console.log(this.rental)
      }
    )
  }

}

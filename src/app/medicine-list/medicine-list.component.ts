import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Medicine } from '../shared/medicine.model';
import { MedicineService } from '../shared/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit, OnDestroy {

  filterName: string = '';

  medicines :Medicine[] = [];
  medSubs? : Subscription;

  constructor(private medicineService: MedicineService, 
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.medicineService.getMedicines();

    this.medSubs = this.medicineService.medicineUpdated.subscribe(resp => {
      this.medicines = resp;
    });
  }

  getColor(med: Medicine): string {

    let currentDate = new Date().getDate().valueOf();

    let afterThirtyDays = new Date(new Date().setDate(currentDate + 30));

    if(new Date(med.expiryDate) < afterThirtyDays)
    {
      return 'red';
    }
    if(med.quantity < 10){
      return 'yellow';
    }

    return 'transparent';
  }

  ngOnDestroy() {
    if(this.medSubs){
      this.medSubs.unsubscribe();
    }
  }

}

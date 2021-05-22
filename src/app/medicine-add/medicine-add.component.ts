import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MedicineService } from '../shared/medicine.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})
export class MedicineAddComponent implements OnInit {

  medForm?: FormGroup;

  constructor(private medService: MedicineService) { }

  ngOnInit(): void {

    this.medForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      expiryDate: new FormControl(
        formatDate(new Date().toDateString(), "yyyy-MM-dd", 'en'), 
        [Validators.required, this.expiresInFifteenDays.bind(this)]),
      notes: new FormControl(null)
    });
  }

  onAddMed() {
    if(!this.medForm?.valid){
      return alert('Form is invalid');
    }
    this.medService.addMedicine(this.medForm?.value);

    this.medForm.reset();
  }

  expiresInFifteenDays(control: FormControl): {[key: string]: boolean} | null {

    let currentDate = new Date().getDate().valueOf();

    let afterFifteenDays = new Date(new Date().setDate(currentDate + 15));

    if(new Date(control.value) <= afterFifteenDays){
      return {"invalidExpiration" : true};
    }

    return null;
  }

}

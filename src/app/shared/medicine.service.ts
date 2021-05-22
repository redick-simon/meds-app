import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Medicine } from './medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  medicines: Medicine[] = [];
  medicineUpdated = new Subject<Medicine[]>();

  medicineUrl = 'https://localhost:44311/medicine';
  constructor(private http: HttpClient) { }

  getMedicines() {
    this.http.get<Medicine[]>(this.medicineUrl).subscribe(res => {
      console.log(res);
      this.medicines = res;
      this.medicineUpdated.next(this.medicines.slice());
    }, err => {      
      console.log(err);
    });
  }

  getMedicine(index: number) {
    return this.medicines.slice()[index];
  }

  addMedicine(med: Medicine){
    this.http.post(this.medicineUrl, med).subscribe(res => {
      this.medicines.push(med);
      this.medicineUpdated.next(this.medicines.slice());
    }, err => {
      console.log(err);
    })
  }

  updateNotes(med:Medicine){
    this.http.put(this.medicineUrl, med).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}

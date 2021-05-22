import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine?: Medicine;

  @Output('onEmitMeds') emitMed = new EventEmitter<Medicine>();

  constructor(
    private route: ActivatedRoute,
    private medService: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(param => {
      this.medicine = this.medService.getMedicine(+param.id);
    })
  }

  onClickBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineComponent } from './medicine-list/medicine/medicine.component';
import { PageNofoundComponent } from './page-nofound/page-nofound.component';

const routes: Routes = [
  { path: '', redirectTo: '/medicine', pathMatch: 'full' },  
  {path: 'medicine', component: MedicineListComponent},
  {path: 'medicine/new', component: MedicineAddComponent},
  {path:'medicine/:id', component: MedicineComponent},
  {path: '**', component: PageNofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

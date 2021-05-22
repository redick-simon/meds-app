import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineComponent } from './medicine-list/medicine/medicine.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNofoundComponent } from './page-nofound/page-nofound.component'
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    MedicineComponent,
    MedicineAddComponent,
    PageNofoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

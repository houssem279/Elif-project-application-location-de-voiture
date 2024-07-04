import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import{NzSelectModule} from  'ng-zorro-antd/select';
import{NzDatePickerModule} from  'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/NgZorroModule';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostCarComponent,
    UpdateCarComponent,
    GetBookingsComponent,
    SearchCarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroModule,
    NzSpinModule,
    NzLayoutModule,
    NzFormModule,
     NzInputModule,
    NzSpinModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboradComponent } from './components/customer-dashborad/customer-dashborad.component';
import { AdminDashboardComponent } from '../admin/components/admin-dashboard/admin-dashboard.component';
import { BookCarComponent } from './components/book-car/book-car.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component';

const routes: Routes = [
  {path:"dashboard",component:CustomerDashboradComponent},
  {path:"book_car/:id",component:BookCarComponent},
  {path:"bookings",component:GetBookingsComponent},
  {path:"search",component:SearchCarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

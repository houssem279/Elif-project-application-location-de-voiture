import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customer-dashborad',
  templateUrl: './customer-dashborad.component.html',
  styleUrls: ['./customer-dashborad.component.scss']
})
export class CustomerDashboradComponent {
  cars:any=[];

  constructor (private customerService:CustomerService,
    private message:NzMessageService
  ){
    this.getAllCars();
  }
  getAllCars(){
    this.customerService.getAllCars().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg ='data:image/jpeg;base64,'+ element.returnedImage;
        this.cars.push(element);
        
      });
    })
  }

}

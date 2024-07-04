import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent {
  isSpinning = false;
  validateForm: FormGroup;
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "NISSAN", "LEXUS", "KIA", "RENAULT", "POLO", "HYUNDAY"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "Essence", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];
  
  cars: any[] = [];

  constructor(private fb:FormBuilder,
    private customerService :CustomerService
  ){
    this.validateForm=this.fb.group({
      brand:[null],
      type:[null],
      color:[null],
      transmission:[null]


    })
  }


  searchCar() {
this.isSpinning=true;
    this.customerService.searchCar(this.validateForm.value).subscribe((res)=>{
      this.isSpinning = false ;
      console.log(res);
      res.carDtoList.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
      console.log(res);
    })
  }
} 



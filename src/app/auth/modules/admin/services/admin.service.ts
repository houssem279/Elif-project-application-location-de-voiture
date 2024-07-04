import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postCar(carDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api/admin/car", carDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  getAllCars(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/cars", {
      headers: this.createAuthorizationHeader()
    })
  }

  deleteCar(carId: number): Observable<any> {
    return this.http.delete(BASIC_URL + "/api/admin/car/" + carId, {
      headers: this.createAuthorizationHeader()
    })
  }

  getCarById(carId: number): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/car/" + carId, {
      headers: this.createAuthorizationHeader()
    })
  }

  updateCar(carId: number, formData: FormData): Observable<any> {
    return this.http.put(BASIC_URL + `/api/admin/car/${carId}`, formData, {
      headers: this.createAuthorizationHeader()
    });
  }

  getBookings(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/car/bookings", {
      headers: this.createAuthorizationHeader()
    })
  }

  changeStatus(bookingId: number, status: string): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/car/booking/' + bookingId + '/' + status, {
      headers: this.createAuthorizationHeader()
    });
  }
  searchCar(searchCarDto: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/car/search', searchCarDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  

  createAuthorizationHeader(): HttpHeaders {
    let token = StorageService.getToken();
    if (token) {
      let authHeaders: HttpHeaders = new HttpHeaders();
      return authHeaders.set('Authorization', 'Bearer ' + token);
    } else {
      return new HttpHeaders();
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-post-car',
    templateUrl: './post-car.component.html',
    styleUrls: ['./post-car.component.scss']
})
export class PostCarComponent implements OnInit {
    cars:any=[];
    postCarForm!: FormGroup;
    isSpinning = false;
    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = null;
    listOfOption:Array<{label:string;value:string}>=[];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "NISSAN", "LEXUS", "KIA", "RENAULT", "POLO", "HYUNDAY"];
    listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "Essence", "CNG"];
    listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
    listOfTransmission = ["Manual", "Automatic"];

    constructor(
        private fb: FormBuilder,
        private adminService: AdminService,
        private router: Router,
        private notification: NzNotificationService
    ) {}

    ngOnInit(): void {
        this.postCarForm = this.fb.group({
            name: [null, Validators.required],
            brand: [null, Validators.required],
            type: [null, Validators.required],
            transmission: [null, Validators.required],
            color: [null, Validators.required],
            price: [null, Validators.required],
            description: [null, Validators.required],
            modelYear: [null, Validators.required], // Keep it as a number
        });
    }

    postCar() {
        console.log(this.postCarForm.value);

        if (this.postCarForm.invalid) {
            this.notification.error("Error", "Please fill in all required fields", { nzDuration: 5000 });
            return;
        }

        const formData: FormData = new FormData();
        formData.append('image', this.selectedFile!);
        formData.append('brand', this.postCarForm.get('brand')!.value);
        formData.append('name', this.postCarForm.get('name')!.value);
        formData.append('type', this.postCarForm.get('type')!.value);
        formData.append('color', this.postCarForm.get('color')!.value);
        formData.append('modelYear', this.postCarForm.get('modelYear')!.value.toString());// Ensure it's treated as a string for FormData
        formData.append('transmission', this.postCarForm.get('transmission')!.value);
        formData.append('price', this.postCarForm.get('price')!.value.toString()); // Ensure it's treated as a string for FormData
        formData.append('description', this.postCarForm.get('description')!.value);

        console.log("FormData:", formData);

        this.adminService.postCar(formData).subscribe({
            next: (res) => {
                console.log(res);
                this.notification.success("Success", "Car posted successfully", { nzDuration: 5000 });
                this.router.navigateByUrl("/admin/dashboard");
            },
            error: (err) => {
                console.error("Error while posting car:", err);
                let errorMessage = "Error while posting car";
                if (err.error && typeof err.error === 'string') {
                    errorMessage = err.error;
                }
                this.notification.error("Error", errorMessage, { nzDuration: 5000 });
            }
        });
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        this.previewImage();
    }

    previewImage() {
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result as string;
            };
            reader.readAsDataURL(this.selectedFile);
        }
    }
}

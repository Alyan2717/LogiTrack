import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../enviroment/enviroment';
import { contactusRouter } from '../../contactus.router';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  submitContactUsForm(formData: any) {
    return this.http.post(environment.apiUrl + contactusRouter.createContact, formData);
  }
}

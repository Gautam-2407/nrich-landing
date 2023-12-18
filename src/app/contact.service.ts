// src/app/contact.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  constructor(private http: HttpClient) {}

  sendFormData(formData: any) {
    return this.http.post(`${this.apiUrl}/api/submit-form`, formData);
  }
}

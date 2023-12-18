import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactService } from '../../contact.service'
@Component({
  selector: 'app-layout4',
  templateUrl: './layout4.component.html',
  styleUrls: ['./layout4.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Layout4Component implements OnInit {
  formData: any = {};
  currentSection = 'home';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
  onSubmit() {
    // Assuming you have form data stored in this.formData
    this.contactService.sendFormData(this.formData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        // Optionally, reset the form or show a success message
      },
      (error) => {
        console.error('Error sending email:', error);
        // Handle error (show error message, log, etc.)
      }
    );
  }
}

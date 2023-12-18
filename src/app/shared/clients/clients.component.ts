import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

  
declare const google: any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements AfterViewInit  {
  service;
  public reviews = [];
  public owlOptions: OwlOptions = {
    items: 4, // Adjust the number of items per slide
    loop: true,
    nav: true,
    dots: false,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  };

  constructor() {}

  ngAfterViewInit() {
    const request = {
      placeId: 'ChIJ-fD7zjntDzkRr7Os-Qhcno4',
      fields: ['reviews']
    };
    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  public callback = (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
  
import { Component, OnInit } from '@angular/core';

import { UniversalService } from '../../universal.service';

@Component({
  selector: 'printek-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './contact.responsive.scss'
  ]
})
export class ContactComponent implements OnInit {

  map = {
    lat: 40.0851224,
    lng: 29.5136359,
    zoom: 16,

    marker: {
      lat: 40.0851224,
      lng: 29.5136359,
      zoom: 16,
      icon: ''
    }
  };

  origin;

  printek = {
    lat: this.map.marker.lat,
    lng: this.map.marker.lng
  };

  navigationView = false;

  images: string[] = [
    'assets/slider/01.jpg',
    'assets/slider/02.jpg',
    'assets/slider/03.jpg',
    'assets/slider/04.jpg',
    'assets/slider/05.jpg'
  ];

  selectedImage = this.images[0];


  constructor(private universal: UniversalService) { }

  ngOnInit() {
  }


  selectImage(image) {
    this.selectedImage = image
  }

  requestNavigation() {
    if(this.universal.isBrowser)
      if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.origin = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            };

            this.navigationView = true
          },
          err => {
            // err.message
            return;
          }
        )
    }
}

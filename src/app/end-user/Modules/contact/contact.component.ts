import { Component, OnInit } from '@angular/core';
import { LatLng } from '@agm/core';
import { last } from '@angular/router/src/utils/collection';

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
    'assets/logo.jpg',
    'assets/logo.jpg',
    'assets/logo.jpg',
    'assets/logo.jpg',
    'assets/logo.jpg'
  ];

  selectedImage = this.images[0];


  constructor() { }

  ngOnInit() {
  }


  selectImage(image) {
    this.selectedImage = image
  }

  requestNavigation() {
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

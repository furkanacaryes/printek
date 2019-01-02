import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printek-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map = {
    lat: 40.0851224,
    lng: 29.5136359,
    zoom: 16
  };

  marker = {
    lat: 40.0851224,
    lng: 29.5136359,
    zoom: 16,
    icon: ''
  };

  constructor() { }

  ngOnInit() {
  }

}

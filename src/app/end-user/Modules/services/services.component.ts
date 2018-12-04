import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printek-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  isLoading = true;
  isSpinConfirmed = false;

  constructor() { }

  ngOnInit() {
    setTimeout(_ => this.isSpinConfirmed = true, 1200);
  }

}

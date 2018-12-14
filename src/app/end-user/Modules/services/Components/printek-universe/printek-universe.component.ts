import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printek-printek-universe',
  templateUrl: './printek-universe.component.html',
  styleUrls: ['./printek-universe.component.scss']
})
export class PrintekUniverseComponent implements OnInit {

  isSpinConfirmed = false;

  constructor() { }

  ngOnInit() {
    setTimeout(_ => this.isSpinConfirmed = true, 1200);
  }

}

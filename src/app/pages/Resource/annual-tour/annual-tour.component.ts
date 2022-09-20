import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-annual-tour',
  templateUrl: './annual-tour.component.html',
  styleUrls: ['./annual-tour.component.css']
})
export class AnnualTourComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Mass Data Limited Annual Tour -2021 | Mass Data Ltd')
  }

}

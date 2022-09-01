import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-mass-data',
  templateUrl: './about-mass-data.component.html',
  styleUrls: ['./about-mass-data.component.css']
})
export class AboutMassDataComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('About Mass Data')
  }

}

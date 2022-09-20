import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-masking-sms-price-in-bangladesh',
  templateUrl: './masking-sms-price-in-bangladesh.component.html',
  styleUrls: ['./masking-sms-price-in-bangladesh.component.css']
})
export class MaskingSmsPriceInBangladeshComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Masking Sms Price In Bangladesh In 2021 | Mass Data Ltd')
  }

}

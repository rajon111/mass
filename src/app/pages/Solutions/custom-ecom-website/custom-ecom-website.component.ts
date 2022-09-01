import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-ecom-website',
  templateUrl: './custom-ecom-website.component.html',
  styleUrls: ['./custom-ecom-website.component.css']
})
export class CustomEcomWebsiteComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Custom Ecommerce Website')
  }

}

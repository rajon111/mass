import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-sms',
  templateUrl: './category-sms.component.html',
  styleUrls: ['./category-sms.component.css']
})
export class CategorySmsComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('SMS | Mass Data Ltd')
  }

}

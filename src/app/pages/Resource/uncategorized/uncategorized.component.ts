import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uncategorized',
  templateUrl: './uncategorized.component.html',
  styleUrls: ['./uncategorized.component.css']
})
export class UncategorizedComponent implements OnInit {

  constructor(
    private serviceTitle:Title
  ) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Masking Sms Price In Bangladesh In 2021 | Mass Data Ltd')
  }

}

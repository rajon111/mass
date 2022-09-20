import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sms-marketing-what',
  templateUrl: './sms-marketing-what.component.html',
  styleUrls: ['./sms-marketing-what.component.css']
})
export class SmsMarketingWhatComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('What Is SMS Marketing? [ Best Answer In 2021] | Mass Data Ltd')
  }

}

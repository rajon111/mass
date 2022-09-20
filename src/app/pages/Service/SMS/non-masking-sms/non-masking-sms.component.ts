import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-non-masking-sms',
  templateUrl: './non-masking-sms.component.html',
  styleUrls: ['./non-masking-sms.component.css']
})
export class NonMaskingSmsComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Non Masking SMS At Best Rate And Service - Non Masking SMS In BD-2016-2022 | Mass Data Ltd')
  }

}

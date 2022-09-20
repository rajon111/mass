import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-masking-sms-bd',
  templateUrl: './masking-sms-bd.component.html',
  styleUrls: ['./masking-sms-bd.component.css']
})
export class MaskingSmsBdComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Masking SMS Service At Best Rate - Masking SMS In BD- 2016-2022 | Mass Data Ltd')
  }

}

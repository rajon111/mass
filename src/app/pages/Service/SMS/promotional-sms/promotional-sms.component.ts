import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-promotional-sms',
  templateUrl: './promotional-sms.component.html',
  styleUrls: ['./promotional-sms.component.css']
})
export class PromotionalSmsComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Promotional Sms')
  }

}

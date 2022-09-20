import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-what-is-an-smpp-gateway',
  templateUrl: './what-is-an-smpp-gateway.component.html',
  styleUrls: ['./what-is-an-smpp-gateway.component.css']
})
export class WhatIsAnSmppGatewayComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Masking Sms Price In Bangladesh In 2021 | Mass Data Ltd')
  }

}

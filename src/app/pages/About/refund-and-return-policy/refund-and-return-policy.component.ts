import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-refund-and-return-policy',
  templateUrl: './refund-and-return-policy.component.html',
  styleUrls: ['./refund-and-return-policy.component.css']
})
export class RefundAndReturnPolicyComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Refund And Return Policy | Mass Data Ltd')
  }

}

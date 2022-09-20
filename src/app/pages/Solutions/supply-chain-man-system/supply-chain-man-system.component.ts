import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-supply-chain-man-system',
  templateUrl: './supply-chain-man-system.component.html',
  styleUrls: ['./supply-chain-man-system.component.css']
})
export class SupplyChainManSystemComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Supply Chain Management System In 22 | Mass Data Ltd')
  }

}

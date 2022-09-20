import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catogury-hosting',
  templateUrl: './catogury-hosting.component.html',
  styleUrls: ['./catogury-hosting.component.css']
})
export class CatoguryHostingComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Hosting | Mass Data Ltd')
  }

}

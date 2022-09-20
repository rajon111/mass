import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fastest-web-hosting',
  templateUrl: './fastest-web-hosting.component.html',
  styleUrls: ['./fastest-web-hosting.component.css']
})
export class FastestWebHostingComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Best Fastest Web Hosting Companies In Bangladesh- 2021 | Mass Data Ltd')
  }

}

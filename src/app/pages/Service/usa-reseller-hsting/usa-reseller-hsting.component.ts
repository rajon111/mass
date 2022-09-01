import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usa-reseller-hsting',
  templateUrl: './usa-reseller-hsting.component.html',
  styleUrls: ['./usa-reseller-hsting.component.css']
})
export class UsaResellerHstingComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('USA Reseller Hosting')
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitary-management-system',
  templateUrl: './sanitary-management-system.component.html',
  styleUrls: ['./sanitary-management-system.component.css']
})
export class SanitaryManagementSystemComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Best Sanitary Management System Provider | 2016-2021 | Mass Data Ltd')
  }

}

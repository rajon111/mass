import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-level-argee',
  templateUrl: './service-level-argee.component.html',
  styleUrls: ['./service-level-argee.component.css']
})
export class ServiceLevelArgeeComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Service-level-argee')
  }

}

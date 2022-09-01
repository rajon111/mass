import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-domain-provider-in-bd',
  templateUrl: './domain-provider-in-bd.component.html',
  styleUrls: ['./domain-provider-in-bd.component.css']
})
export class DomainProviderInBdComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Domain-provider-in-bd')
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hosting-privacy-policy',
  templateUrl: './hosting-privacy-policy.component.html',
  styleUrls: ['./hosting-privacy-policy.component.css']
})
export class HostingPrivacyPolicyComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Hosting-privacy-policy')
  }

}

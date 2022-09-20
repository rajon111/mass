import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-promotional',
  templateUrl: './promotional.component.html',
  styleUrls: ['./promotional.component.css']
})
export class PromotionalComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('What Is Promotional Sms? Best Answer In 222 | Mass Data Ltd')
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-smpp-solutions',
  templateUrl: './smpp-solutions.component.html',
  styleUrls: ['./smpp-solutions.component.css']
})
export class SmppSolutionsComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Smpp solutions')
  }

}

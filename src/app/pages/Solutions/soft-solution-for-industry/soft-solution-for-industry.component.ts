import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-soft-solution-for-industry',
  templateUrl: './soft-solution-for-industry.component.html',
  styleUrls: ['./soft-solution-for-industry.component.css']
})
export class SoftSolutionForIndustryComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Best Software Solution For Industry In 2021 | Mass Data Ltd')
  }

}

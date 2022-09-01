import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('TOS')
  }

}

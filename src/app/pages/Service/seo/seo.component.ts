import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.css']
})
export class SeoComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('SEO-Search Engine Opt.')
  }

}

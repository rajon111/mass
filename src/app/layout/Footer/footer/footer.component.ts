import { ServiceComponent } from './../../../pages/Solutions/service/service.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    
  }

}

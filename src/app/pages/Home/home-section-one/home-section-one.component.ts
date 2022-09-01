import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-home-section-one',
    templateUrl: './home-section-one.component.html',
    styleUrls: ['./home-section-one.component.css']
})
export class HomeSectionOneComponent implements OnInit {

    constructor(private serviceTitle: Title) { }

    ngOnInit(): void {
        this.serviceTitle.setTitle('Mass Data')
    }
    imageObject = [{
        image: '../../../../assets/clients/106504737_581442352540048_2298773867032566013_n.jpg',
        thumbImage: '../../../../assets/clients/106504737_581442352540048_2298773867032566013_n.jpg',

    }, {
        image: '../../../../assets/clients/download.jpg',
        thumbImage: '../../../../assets/clients/download.jpg',


    }, {
        image: '../../../../assets/clients/download.png',
        thumbImage: '../../../../assets/clients/download.png'

    }, {
        image: '../../../../assets/clients/png-clipart-jahangirnagar-university-school-college-dhaka-others-text-logo.png',
        thumbImage: '../../../../assets/clients/png-clipart-jahangirnagar-university-school-college-dhaka-others-text-logo.png',



    },
    {
        image: '../../../../assets/clients/masudgroup.svg',
        thumbImage: '../../../../assets/clients/masudgroup.svg',

    },
    {
        image: '../../../../assets/clients/Asian-Power-Generation-Logo.jpg',
        thumbImage: '../../../../assets/clients/Asian-Power-Generation-Logo.jpg'

    },
    {
        image: '../../../../assets/clients/cropped-silme-logo-153x40.png',
        thumbImage: '../../../../assets/clients/cropped-silme-logo-153x40.png',


    }];
}

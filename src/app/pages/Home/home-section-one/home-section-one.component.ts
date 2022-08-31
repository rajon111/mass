import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-home-section-one',
  templateUrl: './home-section-one.component.html',
  styleUrls: ['./home-section-one.component.css']
})
export class HomeSectionOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [{
    image: 'https://massdataltd.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-14-at-2.58.08-PM.jpeg',
    thumbImage: 'https://massdataltd.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-14-at-2.58.08-PM.jpeg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://massdataltd.com/wp-content/uploads/2021/07/CIGL-Canada.jpg',
    thumbImage: 'https://massdataltd.com/wp-content/uploads/2021/07/CIGL-Canada.jpg'
}, {
    image: 'https://massdataltd.com/wp-content/uploads/2021/07/Deboniar-Group.jpg',
    thumbImage: 'https://massdataltd.com/wp-content/uploads/2021/07/Deboniar-Group.jpg',
    title: 'Example with title.'
},{
    image: 'https://massdataltd.com/wp-content/uploads/2021/07/Express-Associate.jpg',
    thumbImage: 'https://massdataltd.com/wp-content/uploads/2021/07/Express-Associate.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://massdataltd.com/wp-content/uploads/2021/07/ju_logo.jpg',
    thumbImage: 'https://massdataltd.com/wp-content/uploads/2021/07/ju_logo.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];
}

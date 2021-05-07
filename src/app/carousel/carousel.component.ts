import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  images: Array<string> = ['https://cdn.pocket-lint.com/r/s/970x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image1-iha6vzu3wk-jpg.webp?v1',
  'https://cdn.pocket-lint.com/r/s/660x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image12-4cufuy0op5-jpg.webp?v1',
  'https://cdn.pocket-lint.com/r/s/660x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image10-jyaddp5lvj-jpg.webp?v1'];
  ngOnInit(): void {
  }

}

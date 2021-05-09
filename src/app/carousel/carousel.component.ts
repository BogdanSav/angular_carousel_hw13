import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../image-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ImageServiceService]
})
export class CarouselComponent implements OnInit {
  getImages: string[];
  carouselWrapper: any;
  setMargin = 0;
  constructor(imgService: ImageServiceService) {
    this.getImages = imgService.getImages();
  }
  onPrev(): void{
    this.carouselWrapper = document.querySelector('.carousel-wrapper');
    if ( this.setMargin >= 0){
      this.setMargin = 0;
    }
    else{
      this.setMargin += 25;
      this.carouselWrapper.style.marginLeft = this.setMargin.toString() + '%';
    }
  }

  onNext(): void {
    this.carouselWrapper = document.querySelector('.carousel-wrapper');
    if ( Math.abs(this.setMargin) > 100){
      this.setMargin = -1 * 100;
    }
    this.setMargin -= 25;
    this.carouselWrapper.style.marginLeft = this.setMargin.toString() + '%';

  }

  ngOnInit(): void {
  }

}

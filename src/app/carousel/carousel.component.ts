import {Component, Input, OnInit} from '@angular/core';
import {ImageServiceService} from '../image-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ImageServiceService]
})
export class CarouselComponent implements OnInit {

  @Input() id: string;
  getImages: string[];
  carouselWrapper: any;
  setMargin = 0;
  constructor(imgService: ImageServiceService) {
    this.getImages = imgService.getImages();
  }
  onPrev(): void{
    this.carouselWrapper = document.getElementById(this.id);
    if ( this.setMargin >= 0){
      this.setMargin = 0;
    }
    else {
      this.setMargin += 25;
      this.carouselWrapper.style.marginLeft = this.setMargin.toString() + '%';
    }
  }

  onNext(): void {
    this.carouselWrapper = document.getElementById(this.id);
    if ( Math.abs(this.setMargin) > 355){
      this.setMargin = -1 * 355;
    }
    else {
      this.setMargin -= 25;
      this.carouselWrapper.style.marginLeft = this.setMargin.toString() + '%';
    }
  }

  ngOnInit(): void {
  }

}

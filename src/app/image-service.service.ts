import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }
  images: string[] = [1002, 101, 1015, 1019, 1018, 1023, 1029].map(ind =>  `https://picsum.photos/id/${ind}/640/480`);
  getImages(): string[]{
      return this.images;
  }
}

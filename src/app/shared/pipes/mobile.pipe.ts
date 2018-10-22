import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {
  isMobile: boolean;
  hasCountryPrefix: boolean;
  length: number;
  firstChar: string;

  transform(value: any, args?: any): any {
    this.mobileAndPrefixCheck(value);
    let country: string;
    let city: string;
    let numberOne: string;
    let numberTwo: string;
    let numberThree: string;

    if (this.isMobile && this.hasCountryPrefix) { // 12 with +
      country = value.slice(0, 3);
      city = value.slice(3, 6);
      numberOne = value.slice(6, 8);
      numberTwo = value.slice(8, 10);
      numberThree = value.slice(10, 12);
    } else if (this.isMobile) { // 10 without +
      country = "";
      city = value.slice(0,4);
      numberOne = value.slice(4,6);
      numberTwo = value.slice(6, 8);
      numberThree = value.slice(8, 10);
    }else if(this.hasCountryPrefix){ // 11 with +
      country = value.slice(0, 3);
      city = value.slice(3, 5);
      numberOne = value.slice(5, 7);
      numberTwo = value.slice(7, 9);
      numberThree = value.slice(9, 11);
    }else{
      country = "";
      city = value.slice(0, 3);
      numberOne = value.slice(3, 5);
      numberTwo = value.slice(5, 7);
      numberThree = value.slice(7, 9);
    }
    if(country){
      return `${country} ${city} ${numberOne} ${numberTwo} ${numberThree}`;
    }
    return `${city} ${numberOne} ${numberTwo} ${numberThree}`;
  }

  private mobileAndPrefixCheck(value: any) {
    this.isMobile = true;
    this.hasCountryPrefix = true;
    this.length = value.length;
    this.firstChar = value[0];

    if (this.firstChar === '+') {
      this.hasCountryPrefix = true;
      if (this.length === 12) {
        this.isMobile = true;
      } else if (this.length === 11) {
        this.isMobile = false;
      }
    } else if (this.firstChar === '0') {
      this.hasCountryPrefix = false;
      if (this.length === 10) {
        this.isMobile = true;
      } else if (length === 9) {
        this.isMobile = false;
      }
    }
  }

}



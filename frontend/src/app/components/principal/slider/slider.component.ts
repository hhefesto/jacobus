import { Component, Input, Output, EventEmitter, ViewChild, ElementRef,
         AfterViewInit, HostListener  } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { ConstantsService } from '../../../services/constants.service';
import { LogicService } from '../../../services/logic.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements AfterViewInit {

  sliderMaxValue = this.constantsService.getSliderMaxValue();
  width;
  position;
  value;
  scale;
  gradient;
  private trackLenght;

  @Input() comparison;
  @Output() comparisonChange = new EventEmitter<any>();
  @ViewChild('slider') input: ElementRef;
  @ViewChild('shell') shellDiv:ElementRef;
  
  @HostListener ('window:resize') onResize() {
    this.width = (this.input.nativeElement.scrollWidth - 4); //size pasar a string con terminación px
    this.trackLenght = this.input.nativeElement.scrollWidth - 80; // 40+20 = 1.5*Thumbsize
    this.move(this.comparison);  
  }

  constructor(private constantsService: ConstantsService,
              private logicService: LogicService,
              private domSanitizer: DomSanitizer) { }

  ngAfterViewInit() {     
    setTimeout(_ => this.onResize());
  }

  move(value) {
    let relativeValue = value/this.sliderMaxValue;
    let valueFromMid = 2*Math.abs(relativeValue - 0.5);
    let factor = 1 + valueFromMid // 1=100%
    let red;
    let green;
    let blue;
    let color;
    let gradient;    
    let min = 20;
    let max = 250;
    let dif = max-min;
    
    red =  max;
    green = Math.round(max - dif*valueFromMid);
    blue = green;
    
    color = "rgba("+red+","+green+","+blue+",1)";
    
    if(relativeValue < 0.47) {      //Left 100%*steps/total = 8/17
      gradient = "linear-gradient(90deg,"+color+","+color+",#FFFFFF,#FFFFFF,#FFFFFF)";    
    }
    else if(relativeValue > 0.52) { //Right 100%*steps/total = 9/17
      gradient = "linear-gradient(90deg,#FFFFFF,#FFFFFF,#FFFFFF,"+color+","+color+")";
    }
    else {                          //Middle
      gradient = "linear-gradient(90deg,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF)";
    }

    this.comparison = value;
    this.value = this.logicService.convertSliderValue(value);
    this.position = relativeValue * this.trackLenght+20;
    this.scale = "scale("+factor+")";
    this.gradient = this.domSanitizer.bypassSecurityTrustStyle(gradient);

    this.comparisonChange.emit(this.comparison);
  }
}



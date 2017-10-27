import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  getSliderMaxValue() {
    return 102 // 17states * 6steps/state
  }

  getSliderInitialvalue() {
    return this.getSliderMaxValue()/2; // Middle of the slider
  }

  getEvaluationLevels() {
    return 17;  // 9 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 9
  }
  
  getObjectiveWidth() {
    return 1000; // canvas units full width
  }

  getNodeHeight() {
    return 50; // canvas units
  }

  getNodeWidth() {
    return 100; // canvas units
  }

  getNodeSeparation() {
    return 150; // canvas units
  }

  getCriteriaPosition() {
    return 150; // canvas units
  }

  getAlternativesPosition() {
    return 350; // canvas units
  }

  getNodeRadius() {
    return 10;  // canvas units
  }

}



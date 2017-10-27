import { Injectable } from '@angular/core';

// true = Deploy, false = Development
let deploy = false;

@Injectable()
export class DeployService {

  constructor() { }

  getRouteStart () {
    if(deploy) 
      return ''; 
    else
      return 'http://localhost:3001/'
  }

  getDisplayVideo () {
    return deploy;
  }
}



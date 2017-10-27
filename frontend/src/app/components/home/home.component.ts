import { Component, OnInit } from '@angular/core';

import { DeployService } from '../../services/deploy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayVideo = this.deployService.getDisplayVideo();

  constructor(private deployService:DeployService) { }

  ngOnInit() {
  }

}


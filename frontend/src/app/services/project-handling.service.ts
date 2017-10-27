import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { DeployService } from './deploy.service';

@Injectable()
export class ProjectHandlingService {
  
  routeStart = this.deployService.getRouteStart();

  constructor(private http:Http,
              private deployService:DeployService) { }

  createProject(projectName) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    const newProject = {
      masterId: JSON.parse(localStorage.getItem('user')).id,
      name: projectName 
    }

    return this.http.post(this.routeStart + 'projects/create', newProject, {headers: headers})
      .map(res => res.json());
  }

  loadProject(projectIndex) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    const project = {
      id : JSON.parse(localStorage.getItem('projects'))[projectIndex]._id
    }

    return this.http.post(this.routeStart + 'projects/load', project, {headers: headers})
      .map(res => res.json());
  }

  storeProject(project) {
    localStorage.setItem('project', JSON.stringify(project));
  }

  deleteProject(projectId) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    const project = {
      projectId: projectId,
      masterId: JSON.parse(localStorage.getItem('user')).id,
    };

    return this.http.post(this.routeStart + 'projects/delete', project, {headers: headers})
      .map(res => res.json());
  }

  getLoadedProject() {
    return JSON.parse(localStorage.getItem('project'));
  }

  saveProject(project) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');  

    return this.http.post(this.routeStart + 'projects/save', project, {headers: headers})
      .map(res => res.json());
  }

  updateProject(projectUpdate) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post(this.routeStart + 'projects/update', projectUpdate, {headers: headers})
      .map(res => res.json());
  }
}
 


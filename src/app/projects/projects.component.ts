import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  getProjects() {
    this.projectsService.getProjects().subscribe(projectList => {
      this.projects = projectList;
    })
    console.log(this.projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  constructor(
    private projectsService: ProjectsService,
  ) {  }
}

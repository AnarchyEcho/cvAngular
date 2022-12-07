import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectsService } from '../projects.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  faGithub = faGithub;

  getProjects() {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects)
  }

  ngOnInit(): void {
    this.getProjects();
  }

  constructor(
    private projectsService: ProjectsService,
  ) {  }
}

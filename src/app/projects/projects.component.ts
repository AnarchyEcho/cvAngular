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
  loading: boolean = false;
  projects: Project[] = [];
  faGithub = faGithub;

  getProjects() {
    this.loading = true;
    this.projectsService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        this.loading = false;
      })
  }

  ngOnInit(): void {
    this.getProjects();
  }

  constructor(
    private projectsService: ProjectsService,
  ) {  }
}

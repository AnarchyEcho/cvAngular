import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  years = `Copyright 2022 - ${new Date().getFullYear()}`
}

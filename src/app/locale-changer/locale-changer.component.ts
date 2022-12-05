import {
  Inject,
  Component,
  LOCALE_ID,
} from '@angular/core';

@Component({
  selector: 'app-locale-changer',
  templateUrl: './locale-changer.component.html',
  styleUrls: ['./locale-changer.component.scss']
})
export class LocaleChangerComponent {
  locales = [
    { code: 'en-US', name: 'English' },
    { code: 'nb-NO', name: 'Norsk' },
  ];
  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}
  onChange() {
    window.location.href = `/${this.activeLocale.toLowerCase()}`;
  }
}
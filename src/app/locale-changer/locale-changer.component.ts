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
    { code: 'nb', name: 'Norsk' },
    { code: 'en-US', name: 'English' },
  ];
  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}
  onChange() {
    window.location.href = `/${this.activeLocale}`;
    console.log(`using this language: ${this.activeLocale}`)
  }
}

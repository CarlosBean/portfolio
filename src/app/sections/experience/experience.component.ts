import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnDestroy {

  experiences: any[];
  translate$: Subscription;

  constructor(translate: TranslateService) {
    translate.get('experience')
      .subscribe((translation: any[]) => this.experiences = translation);

    this.translate$ = translate.onLangChange
      .pipe(map(event => event.translations.experience))
      .subscribe((translation: any) => this.experiences = translation);
  }

  ngOnDestroy(): void {
    this.translate$.unsubscribe();
  }
}

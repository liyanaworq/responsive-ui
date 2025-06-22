import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-analytics', 
  template: `<p>analytics works!</p>`,
  styleUrls: ['./analytics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsComponent { }

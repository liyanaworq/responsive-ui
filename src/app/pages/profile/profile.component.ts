import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile', 
  template: `<p>profile works!</p>`,
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent { }

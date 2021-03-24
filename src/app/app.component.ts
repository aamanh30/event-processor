import { SharedService } from './features/shared/services/shared/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event-processor';

  constructor(private sharedService: SharedService) {
    this.sharedService.getEventIds().subscribe();
  }
}

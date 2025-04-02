import { Component } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Launch } from '../models/launch';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  search(): void {
    if (this.year) {
      this.spacexService.getLaunchesByYear(this.year).subscribe(data => {
        this.launches = data;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Cultural } from './cultural.model';
import { CulturalService } from './cultural.service';

@Component({
  selector: 'app-culturals',
  templateUrl: './culturals.component.html',
  styleUrls: ['./culturals.component.scss']
})
export class CulturalsComponent implements OnInit {
  culturals: Cultural[];

  constructor(private culturalService: CulturalService) { }

  ngOnInit() {
    this.culturals = this.culturalService.getCulturals();
  }
}

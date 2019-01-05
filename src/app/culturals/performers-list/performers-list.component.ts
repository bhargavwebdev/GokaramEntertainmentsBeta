import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cultural } from '../cultural.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CulturalService } from '../cultural.service';
import { PerformerService } from './perfomer.service';
import { Performer } from './performer.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-performers-list',
  templateUrl: './performers-list.component.html',
  styleUrls: ['./performers-list.component.scss']
})
export class PerformersListComponent implements OnInit {
  id: string;
  profile: any;
  subscription: Subscription;
  performers: Performer[];
  isPerformers = false;
  cultural: Cultural[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private performer: PerformerService,
    private culturalService: CulturalService) {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 1200)
      );   
  }

  ngOnInit() {
   this.subscription =  this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.performers = this.performer.getPerformers(+this.id);
      this.cultural = this.culturalService.getCulturalName(+this.id);
      if(this.performers.length != 0){
        this.isPerformers = true;
      }
      else{
        this.isPerformers = false;
      }
   });
  }

  onShowProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  ngOnDestroy(){
  }
}

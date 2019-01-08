import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from './profile.model';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.scss']
})
export class PerformerComponent implements OnInit {
  id: number;
  profile: any;

  profiles: Profile[] = [
    new Profile('../../assets/profile-photos/profile.jpg')
  ]

  constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.profile = +params['profile'];
      }
    );


   
}
}

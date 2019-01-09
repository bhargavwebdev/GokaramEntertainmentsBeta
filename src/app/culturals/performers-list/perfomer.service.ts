import { Performer } from './performer.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PerformerService{

  performers: Performer[] = [
    new Performer(1,'Bhargav','5','../../assets/culturals/baratanatyam.jpg','Hyderabad',12500,1),
    new Performer(2,'Ravinder','5','../../assets/culturals/kuchipudi.jpg','Hyderabad',12500,2),
    new Performer(3,'Subodh','5','../../assets/culturals/baratanatyam.jpg','Hyderabad',12500,1),
    new Performer(4,'Roja','5','../../assets/culturals/kathak.jpg','Hyderabad',12500,2),
    new Performer(5,'Naresh','5','../../assets/culturals/singers.jpg','Hyderabad',12500,5),
    new Performer(6,'Vipin','5','../../assets/culturals/baratanatyam.jpg','Hyderabad',12500,1)
  ];


  getPerformers(cultureId:number){
      return this.performers.filter(x => x.cultureId === cultureId);    
  }
  
}
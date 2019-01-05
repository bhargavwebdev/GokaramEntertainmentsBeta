import { Injectable } from '@angular/core';
import { Cultural } from './cultural.model';

@Injectable({
  providedIn: 'root'
})
export class CulturalService {

  culturals: Cultural[] = [
    new Cultural(1,'Barathanatyam','','../../assets/culturals/baratanatyam.jpg'),
    new Cultural(2,'Burrakatha','','../../assets/culturals/burrakatha.jpg'),
    new Cultural(3,'Harikatha','','../../assets/culturals/harikatha.jpg'),
    new Cultural(4,'Jangam Katha','','../../assets/culturals/jangam-katha.jpg'),
    new Cultural(5,'Kathak','','../../assets/culturals/kathak.jpg'),
    new Cultural(6,'Kathakali','','../../assets/culturals/kathakali.jpg'),
    new Cultural(7,'Kuchipudi','','../../assets/culturals/kuchipudi.jpg'),
    new Cultural(8,'Natakam','','../../assets/culturals/natakam.jpg'),
    new Cultural(9,'Oggu katha','','../../assets/culturals/oggu-katha.jpg'),
    new Cultural(10,'Kolatam','','../../assets/culturals/palamuru-kolatam.jpg'),
    new Cultural(11,'Singers','','../../assets/culturals/singers.jpg'),
    new Cultural(12,'Janapadalu','','../../assets/culturals/telangana-janapadalu.jpg')  
  ];

getCulturals(){
    return this.culturals.slice();
}

getCulturalName(id){
    return this.culturals.filter(x => x.id === id);    
}
}

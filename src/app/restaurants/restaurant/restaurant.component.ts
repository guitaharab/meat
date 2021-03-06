import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',

})
export class RestaurantComponent implements OnInit {
  //Input para que os componentes pais possam utilizar este componente
  @Input() restaurant : Restaurant

  constructor() { }

  ngOnInit() {
  }

}

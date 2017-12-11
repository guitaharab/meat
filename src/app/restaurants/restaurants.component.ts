import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import { RestaurantsService } from 'app/restaurants/restaurants.services';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',

})
export class RestaurantsComponent implements OnInit {

  //array de restaurantes enviados pelo restaurantsservice
  //passado a view dinâmica
  restaurants : Restaurant[]
  constructor(private restaurantiserv: RestaurantsService) { 
    
  }

  //executado na criação do componente
  ngOnInit() {
    this.restaurantiserv.restaurants()
      .subscribe(response => this.restaurants = response);
  }

}

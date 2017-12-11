import {Restaurant} from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {
    rests : Restaurant[]
    
    constructor(private Http: Http){
    }

    //metodo que retorna o array de restaurantes para ser utilizado pelo restaurants.component
    restaurants(): Observable<Restaurant[]> {

        return this.Http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.errorHandle);

    }
}
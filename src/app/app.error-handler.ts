import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    //método que retorna mensagens de erro
    static errorHandle (error: Response | any){
        let errorMessage : String;
        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao carregar a url ${error.url}`;
        }else{
            errorMessage = error.toString;
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    } 
}
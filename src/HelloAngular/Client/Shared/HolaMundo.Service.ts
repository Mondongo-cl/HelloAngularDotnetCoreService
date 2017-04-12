import { Injectable } from '@angular/core';
import { HttpModule, Http} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { IHolaMundoService } from './IHolaMundo.Service';
import { ResponseData } from './responsedata.model';




@Injectable()
export class HolaMundoService implements IHolaMundoService{
    // Uri del Web API a consumir
    private _serviceUri = "api/HolaMundo";
    //constructor del servicio, se declara que para su construccion se debe injectar una instancia de la clase Http
    constructor(private _http: Http) {     }
    // Implementacion de la interface IHolaMundo
    SayHello(): Observable<ResponseData>
    {
        // Utilizamos la instancia de la clase Http injectada para realizar la llamada al WebApi
        return this._http.get(this._serviceUri) 
            .map(m => { // mediante el operador map de rxjs se realiza la des-serializacion de la respuesta en un objeto ResponseData mediante la operacion as
                return m.json() as ResponseData;
            });
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { IHolaMundoService } from './IHolaMundo.Service';
import { ResponseData } from './responsedata.model';


@Injectable()
export class HolaMundoServiceEspanol implements IHolaMundoService {
    constructor() {

    }
    SayHello(): Observable<ResponseData> {
        let r = new ResponseData();
        r.mensaje = 'Hola Mundo';
        return of<ResponseData>(r);

    }
}
import { Component, OnInit } from '@angular/core';

import { IHolaMundoService } from '../Shared/IHolaMundo.Service';
import { Inject } from '@angular/core';
import { ResponseData } from '../shared/responsedata.model';
@Component({
    selector: 'hola-mundo',
    template: '<h1>Service Call</h1><p style="color:red">{{serviceMessage}}</p>',
    
})
export class HolaMundoComponent implements OnInit {

    serviceMessage: string;
    constructor( @Inject('IHolaMundoService') private _service: IHolaMundoService) { }

    ngOnInit() {
    
        this._service.SayHello().subscribe(
            s => this.serviceMessage = s.mensaje
            , e => console.error(e)
            , () => console.trace('success')
        );
        
    }

}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main',
    template: '<h1>Hola Mundo Angular 4</h1><h2>{{mensaje}}</h2><p><hola-mundo></hola-mundo></p>'
}) 
export class MainComponent implements OnInit {
    mensaje: string;

    constructor() { }
 
    ngOnInit() {
        this.mensaje = "Bienvenidos";
    }
    
}
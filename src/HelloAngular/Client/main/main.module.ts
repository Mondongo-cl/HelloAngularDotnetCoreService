import { NgModule, } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';

import { HolaMundoComponent } from '../HolaMundo/holamundo.component';


import { IHolaMundoService } from '../Shared/IHolaMundo.service';

import { HolaMundoService } from '../Shared/HolaMundo.Service';
import { HolaMundoServiceAleman } from '../Shared/HolaMundo.Service.Aleman';
import { HolaMundoServiceIngles } from '../Shared/HolaMundo.Service.Ingles';
import { HolaMundoServiceEspanol } from '../Shared/HolaMundo.Service.Espanol';



@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [MainComponent, HolaMundoComponent],
    entryComponents: [],
    providers: [{ provide: 'IHolaMundoService', useClass: HolaMundoServiceIngles }],
    bootstrap: [MainComponent]
})
export class MainModule { }
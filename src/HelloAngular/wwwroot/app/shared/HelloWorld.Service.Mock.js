"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const of_1 = require("rxjs/observable/of");
const responsedata_model_1 = require("./responsedata.model");
let HelloWorldServiceMock = class HelloWorldServiceMock {
    constructor() {
    }
    SayHello() {
        let r = new responsedata_model_1.ResponseData();
        r.mensaje = 'Hola Mundo';
        return of_1.of(r);
    }
};
HelloWorldServiceMock = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HelloWorldServiceMock);
exports.HelloWorldServiceMock = HelloWorldServiceMock;
//export interface IHolaMundoService {
//    SayHello(): ResponseData;
//}
//@Injectable()
//export class HolaMundoServiceEspanol implements IHolaMundoService {
//    SayHello(): ResponseData {
//        let r = new ResponseData();
//        r.mensaje = 'Hola Mundo';
//        return r;
//    }
//}
//@Injectable()
//export class HolaMundoServiceIngles implements IHolaMundoService {
//    SayHello(): ResponseData {
//        let r = new ResponseData();
//        r.mensaje = 'Hola Mundo';
//        return r;
//    }
//}
//@Injectable()
//export class HolaMundoServiceAleman implements IHolaMundoService {
//    SayHello(): ResponseData {
//        let r = new ResponseData();
//        r.mensaje = 'Hallo Welt';
//        return r;
//    }
//} 

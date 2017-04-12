"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const main_component_1 = require("./main.component");
const holamundo_component_1 = require("../HolaMundo/holamundo.component");
const HolaMundo_Service_Ingles_1 = require("../Shared/HolaMundo.Service.Ingles");
let MainModule = class MainModule {
};
MainModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [main_component_1.MainComponent, holamundo_component_1.HolaMundoComponent],
        entryComponents: [],
        providers: [{ provide: 'IHolaMundoService', useClass: HolaMundo_Service_Ingles_1.HolaMundoServiceIngles }],
        bootstrap: [main_component_1.MainComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map
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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var app_component_1 = require('./app.component');
var smartTable_component_1 = require('./model/components/smartTable/smartTable.component');
var formPerson_component_1 = require('./model/components/formPerson/formPerson.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [
                app_component_1.AppComponent,
                angular2_polymer_1.PolymerElement('vaadin-grid'),
                angular2_polymer_1.PolymerElement('paper-input'),
                angular2_polymer_1.PolymerElement('gold-email-input'),
                angular2_polymer_1.PolymerElement('paper-button'),
                angular2_polymer_1.PolymerElement('paper-dialog'),
                smartTable_component_1.SmartTable,
                formPerson_component_1.FormPerson
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
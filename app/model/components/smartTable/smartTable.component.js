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
require('rxjs/add/operator/map');
var http_1 = require('@angular/http');
var config_provider_1 = require('../../../config/config.provider');
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var SmartTable = (function () {
    function SmartTable(http, config) {
        this.http = http;
        this.config = config;
        this.people = [];
    }
    SmartTable.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.config.getUrls().listOfPeople;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) { return _this.people = res.results; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SmartTable.prototype, "people", void 0);
    SmartTable = __decorate([
        core_1.Component({
            selector: 'smart-table',
            templateUrl: 'app/model/components/smartTable/smartTable.template.html',
            styleUrls: ['app/model/components/smartTable/smartTable.style.css'],
            providers: [config_provider_1.ConfigProvider]
        }), 
        __metadata('design:paramtypes', [http_1.Http, config_provider_1.ConfigProvider])
    ], SmartTable);
    return SmartTable;
}());
exports.SmartTable = SmartTable;
//# sourceMappingURL=smartTable.component.js.map
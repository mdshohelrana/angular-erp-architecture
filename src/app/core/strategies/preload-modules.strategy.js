//Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var PreloadModulesStrategy = (function () {
    function PreloadModulesStrategy() {
    }
    PreloadModulesStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Observable_1.Observable.of(null);
        }
    };
    return PreloadModulesStrategy;
}());
PreloadModulesStrategy = __decorate([
    core_1.Injectable()
], PreloadModulesStrategy);
exports.PreloadModulesStrategy = PreloadModulesStrategy;
//# sourceMappingURL=preload-modules.strategy.js.map
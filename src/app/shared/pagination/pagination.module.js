"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pagination_component_1 = require("./pagination.component");
var PaginationModule = (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
PaginationModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [pagination_component_1.PaginationComponent],
        declarations: [pagination_component_1.PaginationComponent]
    })
], PaginationModule);
exports.PaginationModule = PaginationModule;
//# sourceMappingURL=pagination.module.js.map
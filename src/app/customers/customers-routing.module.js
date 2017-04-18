"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customers_component_1 = require("./customers.component");
var customers_card_component_1 = require("./customers-card.component");
var customers_grid_component_1 = require("./customers-grid.component");
var routes = [
    { path: '', component: customers_component_1.CustomersComponent }
];
var CustomersRoutingModule = (function () {
    function CustomersRoutingModule() {
    }
    return CustomersRoutingModule;
}());
CustomersRoutingModule.components = [customers_component_1.CustomersComponent, customers_card_component_1.CustomersCardComponent, customers_grid_component_1.CustomersGridComponent];
CustomersRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CustomersRoutingModule);
exports.CustomersRoutingModule = CustomersRoutingModule;
//# sourceMappingURL=customers-routing.module.js.map
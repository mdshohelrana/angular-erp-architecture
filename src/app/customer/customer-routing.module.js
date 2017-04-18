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
var customer_component_1 = require("./customer.component");
var customer_orders_component_1 = require("./customer-orders.component");
var customer_details_component_1 = require("./customer-details.component");
var customer_edit_component_1 = require("./customer-edit.component");
var can_activate_guard_1 = require("./can-activate.guard");
var can_deactivate_guard_1 = require("./can-deactivate.guard");
var routes = [
    {
        path: '',
        component: customer_component_1.CustomerComponent,
        children: [
            { path: 'orders', component: customer_orders_component_1.CustomerOrdersComponent },
            { path: 'details', component: customer_details_component_1.CustomerDetailsComponent },
            { path: 'edit',
                component: customer_edit_component_1.CustomerEditComponent,
                canActivate: [can_activate_guard_1.CanActivateGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            }
        ]
    }
];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    return CustomerRoutingModule;
}());
CustomerRoutingModule.components = [customer_component_1.CustomerComponent, customer_orders_component_1.CustomerOrdersComponent, customer_details_component_1.CustomerDetailsComponent, customer_edit_component_1.CustomerEditComponent];
CustomerRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: [can_activate_guard_1.CanActivateGuard, can_deactivate_guard_1.CanDeactivateGuard]
    })
], CustomerRoutingModule);
exports.CustomerRoutingModule = CustomerRoutingModule;
//# sourceMappingURL=customer-routing.module.js.map
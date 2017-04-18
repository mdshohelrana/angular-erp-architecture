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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CustomerComponent = (function () {
    //displayMode: CustomerDisplayModeEnum;
    //displayModeEnum = CustomerDisplayModeEnum;
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        //No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-orders',
        templateUrl: 'customer.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
//# sourceMappingURL=customer.component.js.map
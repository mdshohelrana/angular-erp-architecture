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
var data_service_1 = require("../core/services/data.service");
var CustomerOrdersComponent = (function () {
    function CustomerOrdersComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id).subscribe(function (customer) {
                _this.customer = customer;
            });
        });
    };
    CustomerOrdersComponent.prototype.ordersTrackBy = function (index, orderItem) {
        return index;
    };
    return CustomerOrdersComponent;
}());
CustomerOrdersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customer-orders',
        templateUrl: 'customer-orders.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
], CustomerOrdersComponent);
exports.CustomerOrdersComponent = CustomerOrdersComponent;
//# sourceMappingURL=customer-orders.component.js.map
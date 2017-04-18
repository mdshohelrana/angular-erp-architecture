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
var data_service_1 = require("../core/services/data.service");
var trackby_service_1 = require("../core/services/trackby.service");
var OrdersComponent = (function () {
    function OrdersComponent(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getCustomersPage(1);
    };
    OrdersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    OrdersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.totalRecords = response.totalRecords;
            _this.customers = response.results;
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customers-orders',
        templateUrl: 'orders.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, trackby_service_1.TrackByService])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map
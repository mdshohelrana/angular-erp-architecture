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
var filter_service_1 = require("../core/services/filter.service");
var CustomersComponent = (function () {
    function CustomersComponent(dataService, filterService) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers for page: ' + page); });
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'city', 'state.name'];
            this.filteredCustomers = this.filterService.filter(this.customers, data, props);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customers',
        templateUrl: 'customers.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, filter_service_1.FilterService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));
//# sourceMappingURL=customers.component.js.map
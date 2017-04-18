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
var sorter_service_1 = require("../core/services/sorter.service");
var trackby_service_1 = require("../core/services/trackby.service");
var CustomersGridComponent = (function () {
    function CustomersGridComponent(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.customers, prop);
    };
    return CustomersGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customers-grid',
        templateUrl: 'customers-grid.component.html',
        styleUrls: ['customers-grid.component.css'],
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [sorter_service_1.SorterService, trackby_service_1.TrackByService])
], CustomersGridComponent);
exports.CustomersGridComponent = CustomersGridComponent;
//# sourceMappingURL=customers-grid.component.js.map
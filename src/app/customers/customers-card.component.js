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
var trackby_service_1 = require("../core/services/trackby.service");
var CustomersCardComponent = (function () {
    function CustomersCardComponent(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersCardComponent.prototype.ngOnInit = function () {
    };
    return CustomersCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CustomersCardComponent.prototype, "customers", void 0);
CustomersCardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customers-card',
        templateUrl: 'customers-card.component.html',
        styleUrls: ['customers-card.component.css'],
        //Add [@flyInOut]="'in'" into template on card
        // animations: [
        //   trigger('flyInOut', [
        //     state('in', style({transform: 'translateX(0)', opacity: 1})),
        //     transition('void => *', [
        //       style({transform: 'translateX(25%)', opacity: 0}),
        //       animate(300)
        //     ]),
        //     transition('* => void', [
        //       animate(300, style({transform: 'translateX(-25%)', opacity: 1}))
        //     ])
        //   ])
        // ],
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [trackby_service_1.TrackByService])
], CustomersCardComponent);
exports.CustomersCardComponent = CustomersCardComponent;
//# sourceMappingURL=customers-card.component.js.map
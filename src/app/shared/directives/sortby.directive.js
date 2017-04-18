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
var SortByDirective = (function () {
    function SortByDirective() {
        this.sorted = new core_1.EventEmitter();
    }
    Object.defineProperty(SortByDirective.prototype, "sortBy", {
        set: function (value) {
            this.sortProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    SortByDirective.prototype.onClick = function (event) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    };
    return SortByDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SortByDirective.prototype, "sorted", void 0);
__decorate([
    core_1.Input('cm-sort-by'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SortByDirective.prototype, "sortBy", null);
SortByDirective = __decorate([
    core_1.Directive({
        selector: '[cm-sort-by]',
        host: {
            '(click)': 'onClick($event)'
        }
    }),
    __metadata("design:paramtypes", [])
], SortByDirective);
exports.SortByDirective = SortByDirective;
//# sourceMappingURL=sortby.directive.js.map
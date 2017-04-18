"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ensureModuleLoadedOnceGuard_1 = require("../ensureModuleLoadedOnceGuard");
var modal_component_1 = require("./modal.component");
var modal_service_1 = require("./modal.service");
var ModalModule = (function (_super) {
    __extends(ModalModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function ModalModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    return ModalModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
ModalModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [modal_component_1.ModalComponent],
        declarations: [modal_component_1.ModalComponent],
        providers: [modal_service_1.ModalService]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [ModalModule])
], ModalModule);
exports.ModalModule = ModalModule;
//# sourceMappingURL=modal.module.js.map
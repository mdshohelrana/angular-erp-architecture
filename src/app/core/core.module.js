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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var growler_module_1 = require("./growler/growler.module");
var modal_module_1 = require("./modal/modal.module");
var navbar_component_1 = require("./navbar/navbar.component");
var data_service_1 = require("./services/data.service");
var filter_service_1 = require("./services/filter.service");
var sorter_service_1 = require("./services/sorter.service");
var trackby_service_1 = require("./services/trackby.service");
var dialog_service_1 = require("./services/dialog.service");
var ensureModuleLoadedOnceGuard_1 = require("./ensureModuleLoadedOnceGuard");
var validation_service_1 = require("./services/validation.service");
var auth_service_1 = require("./services/auth.service");
var CoreModule = (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    return CoreModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
CoreModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, http_1.HttpModule, growler_module_1.GrowlerModule, modal_module_1.ModalModule],
        exports: [growler_module_1.GrowlerModule, router_1.RouterModule, http_1.HttpModule, modal_module_1.ModalModule, navbar_component_1.NavbarComponent],
        declarations: [navbar_component_1.NavbarComponent],
        providers: [sorter_service_1.SorterService, filter_service_1.FilterService, data_service_1.DataService, trackby_service_1.TrackByService,
            dialog_service_1.DialogService, validation_service_1.ValidationService, auth_service_1.AuthService] // these should be singleton
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map
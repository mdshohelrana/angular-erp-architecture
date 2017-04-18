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
var auth_service_1 = require("../services/auth.service");
var growler_service_1 = require("../growler/growler.service");
var NavbarComponent = (function () {
    function NavbarComponent(router, authservice, growler) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.loginLogoutText = 'Login';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.authservice.authChanged
            .subscribe(function (loggedIn) {
            _this.setLoginLogoutText();
        }, function (err) { return console.log(err); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.loginOrOut = function () {
        var _this = this;
        var isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe(function (status) {
                _this.setLoginLogoutText();
                _this.growler.growl('Logged Out', growler_service_1.GrowlerMessageType.Info);
                _this.router.navigate(['/customers']);
                return;
            }, function (err) { return console.log(err); });
        }
        this.redirectToLogin();
    };
    NavbarComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.setLoginLogoutText = function () {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-navbar',
        templateUrl: 'navbar.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, growler_service_1.GrowlerService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map
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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../core/services/auth.service");
var validation_service_1 = require("../core/services/validation.service");
var growler_service_1 = require("../core/growler/growler.service");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, authService, growler) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            password: ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]]
        });
    };
    LoginComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.authService.login(value)
            .subscribe(function (status) {
            if (status) {
                _this.growler.growl('Logged in', growler_service_1.GrowlerMessageType.Info);
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/customers']);
                }
            }
            else {
                var loginError = 'Unable to login';
                _this.errorMessage = loginError;
                _this.growler.growl(loginError, growler_service_1.GrowlerMessageType.Danger);
            }
        }, function (err) { return console.log(err); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        auth_service_1.AuthService,
        growler_service_1.GrowlerService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
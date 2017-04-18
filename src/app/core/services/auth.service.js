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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = '/api/auth';
        this.isAuthenticated = false;
        this.authChanged = new core_1.EventEmitter();
    }
    AuthService.prototype.userAuthChanged = function (status) {
        this.authChanged.emit(status); //Raise changed event
    };
    AuthService.prototype.login = function (userLogin) {
        var _this = this;
        return this.http.post(this.authUrl + '/login', userLogin)
            .map(function (response) {
            var loggedIn = response.json();
            _this.isAuthenticated = loggedIn;
            _this.userAuthChanged(loggedIn);
            return loggedIn;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.authUrl + '/logout', null)
            .map(function (response) {
            var loggedOut = response.json();
            _this.isAuthenticated = !loggedOut;
            _this.userAuthChanged(!loggedOut); //Return loggedIn status
            return status;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    return AuthService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AuthService.prototype, "authChanged", void 0);
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
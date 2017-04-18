"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DialogService = (function () {
    function DialogService() {
        this.message = 'Is it OK?';
    }
    DialogService.prototype.confirm = function (message) {
        if (message) {
            this.message = message;
        }
        ;
        this.promise = new Promise(this.resolver);
        return this.promise;
    };
    ;
    DialogService.prototype.resolver = function (resolve) {
        return resolve(window.confirm('Is it OK?'));
    };
    return DialogService;
}());
DialogService = __decorate([
    core_1.Injectable()
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map
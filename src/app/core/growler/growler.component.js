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
var growler_service_1 = require("./growler.service");
var GrowlerComponent = (function () {
    function GrowlerComponent(growlerService) {
        this.growlerService = growlerService;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    GrowlerComponent.prototype.ngOnInit = function () { };
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    GrowlerComponent.prototype.growl = function (message, growlType) {
        this.growlCount++;
        var bootstrapAlertType = growler_service_1.GrowlerMessageType[growlType].toLowerCase();
        var messageType = "alert-" + bootstrapAlertType;
        var growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    };
    GrowlerComponent.prototype.removeGrowl = function (id) {
        var _this = this;
        this.growls.forEach(function (growl, index) {
            if (growl.id === id) {
                _this.growls.splice(index, 1);
                _this.growlCount--;
                console.log('removed ' + id);
            }
        });
    };
    return GrowlerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GrowlerComponent.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GrowlerComponent.prototype, "timeout", void 0);
GrowlerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-growler',
        template: "\n    <div [ngClass]=\"position\" class=\"growler\">\n      <div *ngFor=\"let growl of growls\" [ngClass]=\"{active: growl.enabled}\" \n          class=\"growl alert {{ growl.messageType }}\">\n          <span class=\"growl-message\">{{ growl.message }}</span>\n      </div>\n    </div>\n  ",
        styleUrls: ['growler.component.css']
    }),
    __metadata("design:paramtypes", [growler_service_1.GrowlerService])
], GrowlerComponent);
exports.GrowlerComponent = GrowlerComponent;
var Growl = (function () {
    function Growl(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.show();
    }
    Growl.prototype.show = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.enabled = true;
            _this.setTimeout();
        }, 0);
    };
    Growl.prototype.setTimeout = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.hide();
        }, this.timeout);
    };
    Growl.prototype.hide = function () {
        var _this = this;
        this.enabled = false;
        window.setTimeout(function () {
            _this.growlerContainer.removeGrowl(_this.id);
        }, this.timeout);
    };
    return Growl;
}());
//# sourceMappingURL=growler.component.js.map
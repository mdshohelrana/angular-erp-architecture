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
var modal_service_1 = require("./modal.service");
var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.show = function (modalContent) {
        var _this = this;
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(function () { return _this.modalVisibleAnimate = true; });
        var promise = new Promise(function (resolve, reject) {
            _this.cancel = function () {
                _this.hide();
                resolve(false);
            };
            _this.ok = function () {
                _this.hide();
                resolve(true);
            };
        });
        return promise;
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.modalVisibleAnimate = false;
        setTimeout(function () { return _this.modalVisible = false; }, 300);
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-modal',
        templateUrl: 'modal.component.html',
        styleUrls: ['modal.component.css']
    }),
    __metadata("design:paramtypes", [modal_service_1.ModalService])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map
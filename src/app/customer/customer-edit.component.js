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
var data_service_1 = require("../core/services/data.service");
var modal_service_1 = require("../core/modal/modal.service");
var growler_service_1 = require("../core/growler/growler.service");
var CustomerEditComponent = (function () {
    function CustomerEditComponent(router, route, dataService, growler, modalService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up. Don't technically need that here
        //since param won't be changing while component is alive. 
        //Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.operationText = 'Update';
                _this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id === 0) {
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (insertedCustomer) {
                if (insertedCustomer) {
                    //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to insert customer';
                    _this.growler.growl(msg, growler_service_1.GrowlerMessageType.Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (status) {
                if (status) {
                    //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.growler.growl('Operation performed successfully.', growler_service_1.GrowlerMessageType.Success);
                    //this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to update customer';
                    _this.growler.growl(msg, growler_service_1.GrowlerMessageType.Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        //Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    CustomerEditComponent.prototype.canDeactivate = function () {
        if (!this.customerForm.dirty) {
            return true;
        }
        //Dirty show display modal dialog to user to confirm leaving
        var modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    };
    return CustomerEditComponent;
}());
__decorate([
    core_1.ViewChild('customerForm'),
    __metadata("design:type", forms_1.NgForm)
], CustomerEditComponent.prototype, "customerForm", void 0);
CustomerEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-customer-edit',
        templateUrl: 'customer-edit.component.html',
        styleUrls: ['customer-edit.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService,
        growler_service_1.GrowlerService,
        modal_service_1.ModalService])
], CustomerEditComponent);
exports.CustomerEditComponent = CustomerEditComponent;
//# sourceMappingURL=customer-edit.component.js.map
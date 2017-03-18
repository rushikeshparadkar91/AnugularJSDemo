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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.image = 'favicon.ico';
        this.color = 'red';
        this.hideaddress = false;
        this.customer = {
            id: 1,
            name: 'Rushikesh Paradkar',
            address: {
                street: '4910 W 108th St',
                city: 'Leawood',
                state: 'Kansas',
                region: 'east'
            }
        };
        this.cars = [
            { model: "Ford Mustang", color: "red" },
            { model: "Fiat 500", color: "white" },
            { model: "Volvo XC90", color: "black" }
        ];
    }
    AppComponent.prototype.clicked = function () {
        this.color = this.color == 'red' ? 'blue' : 'red';
    };
    AppComponent.prototype.colorChange = function (color) {
        this.color = color;
    };
    AppComponent.prototype.addressClick = function () {
        this.hideaddress = !this.hideaddress;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: "app.component.html",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
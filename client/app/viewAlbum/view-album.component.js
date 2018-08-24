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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var snap_1 = require("../_models/snap");
var snap_service_1 = require("../_services/snap.service");
var alert_service_1 = require("../_services/alert.service");
var ViewAlbumComponent = (function () {
    function ViewAlbumComponent(snapService, route, alertService, location) {
        this.snapService = snapService;
        this.route = route;
        this.alertService = alertService;
        this.location = location;
    }
    ViewAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.snapService.getSnap(params['id']); })
            .subscribe(function (snap) { return _this.snap = snap; });
    };
    ViewAlbumComponent.prototype.deleteSnap = function (id) {
        var _this = this;
        this.snapService.deleteSnap(id)
            .subscribe(function (data) {
            _this.alertService.success('Successfully deleted', true);
            _this.goBack();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ViewAlbumComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', snap_1.Snap)
    ], ViewAlbumComponent.prototype, "snap", void 0);
    ViewAlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "view-snap",
            templateUrl: "view-album.component.html"
        }), 
        __metadata('design:paramtypes', [snap_service_1.SnapService, router_1.ActivatedRoute, alert_service_1.AlertService, common_1.Location])
    ], ViewAlbumComponent);
    return ViewAlbumComponent;
}());
exports.ViewAlbumComponent = ViewAlbumComponent;
//# sourceMappingURL=view-album.component.js.map
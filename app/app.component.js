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
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.toggle = true;
        this.data = data_1.data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules = { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = { pageCount: 5 };
    };
    AppComponent.prototype.click = function () {
        this.toggle = !this.toggle;
        this.grid.editSettings.allowEditing = this.toggle;
        this.grid.editSettings.allowAdding = this.toggle;
        this.grid.editSettings.allowDeleting = this.toggle;
        this.grid.editSettings.allowEditOnDblClick = this.toggle;
    };
    ;
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_ng_grids_1.GridComponent)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "<button ej-button class='e-flat' (click)='click()'>Change Header Text</button>\n    <ej-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>\n        <e-columns>\n        <e-column field='OrderID' headerText='Order ID' width='120' textAlign=\"right\" isPrimaryKey='true' [validationRules]='orderidrules'></e-column>\n            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>\n            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign=\"right\" editType='numericedit' [validationRules]='freightrules'></e-column>\n            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>\n        </e-columns>\n    </ej-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;

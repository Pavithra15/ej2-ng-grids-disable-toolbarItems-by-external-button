import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Dialog } from '@syncfusion/ej2-popups';
import {
    GridComponent, ToolbarService, PageService, ExcelExportService, PdfExportService,
    GroupService
} from '@syncfusion/ej2-ng-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'
import { Query } from '@syncfusion/ej2-data';
import { employeeData, data } from './data';


@Component({
    selector: 'app-container',
    template: `<button ej-button class='e-flat' (click)='click()'>Change Header Text</button>
    <ej-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
        <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="right" isPrimaryKey='true' [validationRules]='orderidrules'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="right" editType='numericedit' [validationRules]='freightrules'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
        </e-columns>
    </ej-grid>`
})
export class AppComponent implements OnInit {



    public toggle: boolean;
    public data: Object[];
    public editSettings: Object;
    public toolbar: string[];
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public editparams: Object;
    public pageSettings: Object;

    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
        this.toggle = true;
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules = { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = { pageCount: 5 };
    }
    click(): void {
        this.toggle = !this.toggle;
        this.grid.editSettings.allowEditing = this.toggle;
        this.grid.editSettings.allowAdding = this.toggle;
        this.grid.editSettings.allowDeleting = this.toggle;
        this.grid.editSettings.allowEditOnDblClick = this.toggle;
    };
}


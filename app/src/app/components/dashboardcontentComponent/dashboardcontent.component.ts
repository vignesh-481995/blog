/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit , ViewChild , AfterViewInit} from '@angular/core';
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MatPaginatorIntl} from '@angular/material';

export interface PeriodicElement {
  lastupdate: string;
  clientname: string;
  refno: string;
  status:string;
}

export interface PeriodicElementManager{
    approvaldate:string;
    clientname:string;
    advisername:string;
    caseno:string;
}

const ELEMENT_DATA: PeriodicElement[] = [  
  {lastupdate: '12 Apr 2019', clientname: 'Caroline Low', refno: 'R19070001',status:'Signed'},
  {lastupdate: '11 Apr 2019', clientname: 'James omg', refno: 'R19070001',status:'Signed'},
  {lastupdate: '12 Apr 2019', clientname: 'Caroline Low', refno: 'R19070001',status:'Signed'},
  {lastupdate: '11 Apr 2019', clientname: 'James omg', refno: 'R19070003',status:'Signed'},
  {lastupdate: '12 Apr 2019', clientname: 'Caroline Low', refno: 'R19070001',status:'Signed'},
  {lastupdate: '11 Apr 2019', clientname: 'James omg', refno: 'R19070008',status:'Signed'},
  {lastupdate: '12 Apr 2019', clientname: 'Caroline Low', refno: 'R19070007',status:'Signed'},
  {lastupdate: '11 Apr 2019', clientname: 'Caroline Low', refno: 'R19070006',status:'Signed'},
  {lastupdate: '12 Apr 2019', clientname: 'Caroline Low', refno: 'R19070002',status:'Signed'},
  {lastupdate: '11 Apr 2019', clientname: 'Caroline Low', refno: 'R19070002',status:'Signed'}
];
const ELEMENT_DATA_Manager: PeriodicElementManager[] = [  
  {approvaldate: '12 Apr 2019', clientname: 'Caroline Low', advisername: 'Liuo Xiao Qin',caseno:'FP190700001'},
  {approvaldate: '11 Apr 2019', clientname: 'James omg', advisername: 'Liuo Xiao Qin',caseno:'FP190700002'},
  {approvaldate: '12 Apr 2019', clientname: 'Caroline Low', advisername: 'Liuo Xiao Qin',caseno:'FP190700003'},
  {approvaldate: '11 Apr 2019', clientname: 'James omg', advisername: 'Liuo Xiao Qin',caseno:'FP190700004'},
  {approvaldate: '12 Apr 2019', clientname: 'Caroline Low', advisername: 'Liuo Xiao Qin',caseno:'FP190700005'},
  
];
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-dashboardcontent',
    templateUrl: './dashboardcontent.template.html'
})

export class dashboardcontentComponent extends NBaseComponent implements OnInit, AfterViewInit {
    mm: ModelMethods;
    getlogintype;
    tabsheading=['Drafts(15)','Returned(25)','Pending(10)','Rejected(5)'];
    displayedColumns: string[] = ['lastupdate', 'clientname', 'refno','status','action'];
    displayedColumnsManager: string[] = ['approvaldate', 'clientname', 'advisername','caseno'];
    
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    dataSourceManager = new MatTableDataSource<PeriodicElementManager>(ELEMENT_DATA_Manager);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.getlogintype='manager';
    }
     ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSourceManager.paginator = this.paginator;
        
            }   

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}

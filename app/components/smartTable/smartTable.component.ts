import {Component, Input, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { ApiRequester } from '../../services/apiRequester.service';
import { ObjFieldsProvider } from '../../services/objFieldsProvider.service';
import { Person } from '../../models/person';
import { ListResponse } from '../../models/listResponse';

@Component({
    selector: 'smart-table',
    moduleId: module.id,
    templateUrl: 'smartTable.component.html',
    styleUrls: ['smartTable.component.css']
    //non agiungo il provider dell'api requester perchè è già presente nella nostra provider hierarchy (presente in app.component)
})

export class SmartTable implements AfterViewInit{
    @ViewChild('grid') gridSel: ElementRef;
    @Input() people: Person[]=[];
    @Output() onSelect = new EventEmitter();

    public grid;
    public page:number = 1;
    public pageSizes:number[] = [10,25,50,100];
    public pageSizeIndex:number = 1;
    public sortOrder:string = null;
    public sort:string = null;
    public maxPage:number;
    public isLoading:boolean=true;
    public table=[
        {
            title : "First Name",
            path : "firstName",
            sorting : {
                sortCode:"fname",
                sortable:true
            }
        },{
            title : "Last Name",
            path : "lastName",
            sorting : {
                sortCode:"lname",
                sortable:true
            }
        },{
            title : "Email",
            path : "email",
            sorting : {
                sortCode:"",
                sortable:false
            }
        }
    ];

    constructor (private backend: ApiRequester, private fieldGetter: ObjFieldsProvider) {}

    ngAfterViewInit() {
        this.grid = this.gridSel.nativeElement;
        this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
    }

    updateTable(page,pageSizeIndex,sortOrder,sort){
        this.page = page;
        this.pageSizeIndex = pageSizeIndex;
        this.sortOrder = sortOrder;
        this.sort = sort;
        this.backend.getPeople(page,this.pageSizes[this.pageSizeIndex],this.sortOrder,this.sort).subscribe(
            (res: ListResponse<Person>) => {
                this.maxPage=Math.ceil(res.paginationData.count/this.pageSizes[this.pageSizeIndex]);
                if(this.page==res.paginationData.pageNum){
                    this.people=res.results;
                }
            },
            (err) => {
                console.log(err)
            }
        );
    }

    getField(obj, path:string){
        return this.fieldGetter.getfield(obj, path);
    }

    //EVENTS
    onSelectedItemsChanged(event: any) {
        let selectedIndex: number = event.target.selection.selected()[0];
        if (selectedIndex !== undefined) {
            console.log(event)
            this.onSelect.emit(this.grid.items[selectedIndex]);
        }
    }

    onChangeSortOrder(sortEvent){
         sortEvent.preventDefault();
         console.log(sortEvent)
         console.log('column n° ' + this.grid.sortOrder[0].column);
         console.log('direction: ' + this.grid.sortOrder[0].direction);
    }

    onDoubleLeftClick(pageInput){
        this.onInsertPage(pageInput, 1);
    }

    onLeftClick(pageInput){
        this.onInsertPage(pageInput, this.page-1);
    }

    onRightClick(pageInput){
        this.onInsertPage(pageInput, this.page+1);
    }

    onDoubleRightClick(pageInput){
        this.onInsertPage(pageInput, this.maxPage);
    }

    onInsertPage(pageInput, pageValue){//pageValue avoid to get the value of page inside page element
        let pageIn:number;
        if(pageValue==null)
            pageIn = +(pageInput.value);
        else
            pageIn = pageValue;
        if(pageInput.validate() && pageIn<= this.maxPage && pageIn >0 && this.page !== pageIn)
            this.updateTable(pageIn, this.pageSizeIndex, this.sortOrder, this.sort);
        else
            pageInput.value=this.page;
    }

    onShowPageChange(e){
        if(e!=null && e.detail!=null && e.detail.item!=null && e.detail.item.value!=null && this.pageSizeIndex!=+e.detail.item.value){
            this.pageSizeIndex=+e.detail.item.value;
            this.page=1;
            this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
        }
    }
}

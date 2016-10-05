import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { ApiRequester } from '../../providers/apiRequester.provider';
import { Person } from '../../model/person';
import { ListResponse } from '../../model/listResponse';

@Component({
    selector: 'smart-table',
    templateUrl: 'app/components/smartTable/smartTable.template.html',
    styleUrls: ['app/components/smartTable/smartTable.style.css']
    //non agiungo il provider dell'api requester perchè è già presente nella nostra provider hierarchy (presente in app.component)
})

export class SmartTable implements OnInit{
    @Input()
    people: Person[]=[];
    @Output()
    onSelect = new EventEmitter();

    constructor (private http: Http, private backend: ApiRequester) {}

    ngOnInit():void{
        this.backend.getPeople().subscribe(
            (res: ListResponse<Person>) => this.people=res.results,
            (err) => console.log(err)
        );
    }

    onSelectedItemsChanged(event: any) {
        let selectedIndex: number = event.target.selection.selected()[0];
        if (selectedIndex !== undefined) {
            this.onSelect.emit(this.people[selectedIndex]);
        }
    }
}

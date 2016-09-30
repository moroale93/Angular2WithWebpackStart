import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import {ConfigProvider} from '../../../config/config.provider';

interface IPerson{
    id:number;
    firstName: string;
    lastName: string;
    email: string;
}

class Person implements IPerson {
    id:number;
    firstName: string;
    lastName: string;
    email: string;
}

@Component({
    selector: 'smart-table',
    templateUrl: 'app/model/components/smartTable/smartTable.template.html',
    styleUrls: ['app/model/components/smartTable/smartTable.style.css'],
    providers: [ConfigProvider]
})

export class SmartTable implements OnInit{
    @Input()
    people: Person[]=[];
    constructor (private http: Http, private config: ConfigProvider) {}

    ngOnInit():void{
        var url=this.config.getUrls().listOfPeople;
        this.http.get(url).map((res: Response) => res.json()).subscribe(res => this.people=res.results);
    }
}

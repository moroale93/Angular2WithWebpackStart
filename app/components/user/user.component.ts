import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiRequester } from '../../services/apiRequester.service'

@Component({
    selector: 'user',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})

export class User implements OnInit{
    private user;
    constructor (private http: Http, private route: ActivatedRoute, private router: Router, private backend : ApiRequester) {}

    ngOnInit():void{
        this.route.params.forEach((params: Params) => {
            this.backend.getPerson(+params['id'])
                .subscribe(res => this.user=res);
        });
    }
}

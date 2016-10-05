import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: 'app/components/user/user.template.html',
    styleUrls: ['app/components/user/user.style.css']
})

export class User implements OnInit{
    private user;
    constructor (private http: Http, private route: ActivatedRoute, private router: Router) {}

    ngOnInit():void{
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.http.get('https://private-20f531-ed2016.apiary-mock.com/vts-ed-rest-api/profiles/'+id)
                .map((res: Response) => res.json())
                .subscribe(res => this.user=res);
        });
    }
}

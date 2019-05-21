import { Component, OnInit } from '@angular/core';
import { Account } from '../bean/account';
import { AccountServiceService } from "app/accountService/account-service.service";

@Component( {
    selector: 'app-view-all-account',
    templateUrl: './view-all-account.component.html',
    styleUrls: ['./view-all-account.component.css']
} )
export class ViewAllAccountComponent implements OnInit {

    accounts:Account[];
    errormessage:string;
    
    constructor( private service: AccountServiceService ) { }


    ngOnInit() {
        this.service.viewall().subscribe(( data ) => {
            this.accounts = data;
            this.errormessage = null;
        }, ( error ) => {
            this.errormessage = error;
            this.accounts = null;
        } );
    }
}



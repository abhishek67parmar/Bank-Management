import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Account } from '../bean/account';
import { AccountServiceService } from "app/accountService/account-service.service";



@Component({
  selector: 'app-view-account-by-customer',
  templateUrl: './view-account-by-customer.component.html',
  styleUrls: ['./view-account-by-customer.component.css']
})
export class ViewAccountByCustomerComponent implements OnInit {

    view:FormGroup;
acc:Account;
customerId:number;
account:Account;
errormessage:string;


    constructor( private fb: FormBuilder, private service: AccountServiceService ) { }

    ngOnInit() {
        this.view = this.fb.group( {
            customerId: ['', [Validators.required, Validators.pattern( '^[0-9]+$' )]]
        } );
    }
    onviewId(){
        this.customerId=this.view.value.customerId;
        console.log(this.customerId);
        /*this.accId=this.acc.accountId;*/
         this.service.viewDetailsByCustId( this.customerId ).subscribe(( data ) => { this.account = data;  this.errormessage=null; }, ( error ) => {
             this.errormessage = error;
             console.log(error);
             this.account = null;
         } );
     }

   }
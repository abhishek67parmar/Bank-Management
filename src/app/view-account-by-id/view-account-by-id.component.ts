import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Account } from '../bean/account';
import { AccountServiceService } from "app/accountService/account-service.service";


@Component({
  selector: 'app-view-account-by-id',
  templateUrl: './view-account-by-id.component.html',
  styleUrls: ['./view-account-by-id.component.css']
})
export class ViewAccountByIdComponent implements OnInit {
    view:FormGroup;
    acc:Account;
    accId:number;
    account:Account;
errormessage:string;
    
    
    
  constructor(private fb:FormBuilder, private service:AccountServiceService) { }

  ngOnInit() {
      this.view=this.fb.group({
          accountId:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]]
      });
  }
  onviewaccId(){
      this.accId=this.view.value.accountId;
     console.log(this.accId);
     /*this.accId=this.acc.accountId;*/
      this.service.viewDetailsByAccId( this.accId ).subscribe(( data ) => { this.account = data;  this.errormessage=null; }, ( error ) => {
          this.errormessage = error;
          this.account = null;
      } );
  }

}

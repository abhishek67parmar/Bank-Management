import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Account } from '../bean/account';
import { AccountServiceService } from "app/accountService/account-service.service";


@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})
export class AccountRegistrationComponent implements OnInit {
    register:FormGroup;
    account:Account;
    message:number;
errormessage:string;


  constructor(private fb:FormBuilder, private service:AccountServiceService) { }

  ngOnInit() {
      
      this.register=this.fb.group({
          customerId:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
          balance:['',[Validators.required,Validators.maxLength(3),Validators.pattern('^[0-9]+$')]],
      accountType:['']
      });
  }
  
  onAcSubmit(){
      this.account=this.register.value;
      console.log(this.account);
      this.service.registerAccount(this.account).subscribe((data)=>{
          this.message=data;
          this.errormessage=null;
          } ,
          (error)=>{
       this.errormessage = error;
       this.message=null;
   });
      
  }

}

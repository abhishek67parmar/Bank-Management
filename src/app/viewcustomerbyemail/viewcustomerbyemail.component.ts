import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";

@Component({
  selector: 'app-viewcustomerbyemail',
  templateUrl: './viewcustomerbyemail.component.html',
  styleUrls: ['./viewcustomerbyemail.component.css']
})
export class ViewcustomerbyemailComponent implements OnInit {
    errormessage: string;
    view:FormGroup;
email:string;
customerlist:Customer;
msg:string;
constructor(private fb:FormBuilder, private service:CustomerServiceService) { }


ngOnInit() {
    this.view=this.fb.group({
        email:['',[Validators.required,Validators.email]]
    });
}
onSubmit(){
    this.email=this.view.value.email;
    this.service.viewDetailsByEmail(this.email).subscribe(( data ) => { this.customerlist = data;  this.errormessage=null; }, ( error ) => {
        this.errormessage = error;
        this.customerlist = null;
    } );
}





}

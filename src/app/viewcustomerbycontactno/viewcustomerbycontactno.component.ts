import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";

@Component({
  selector: 'app-viewcustomerbycontactno',
  templateUrl: './viewcustomerbycontactno.component.html',
  styleUrls: ['./viewcustomerbycontactno.component.css']
})
export class ViewcustomerbycontactnoComponent implements OnInit {
   
    view:FormGroup;
contactNo: number;
cust:Customer;
customerlist:Customer;
msg:string;
errormessage:string;
constructor(private fb:FormBuilder, private service:CustomerServiceService) { }
ngOnInit() {
    this.view=this.fb.group({
        contactNo:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
    });
}
onSubmit(){
    this.cust=this.view.value;
    this.contactNo=this.cust.contactNo;
    this.service.viewDetailsByContactNo(this.contactNo).subscribe(( data ) => { this.customerlist = data;  this.errormessage=null; }, ( error ) => {
        this.errormessage = error;
        this.customerlist = null;
    } );
}





}
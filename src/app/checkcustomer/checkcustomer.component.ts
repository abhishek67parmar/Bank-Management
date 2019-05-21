import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";
@Component( {
    selector: 'app-checkcustomer',
    templateUrl: './checkcustomer.component.html',
    styleUrls: ['./checkcustomer.component.css']
} )
export class CheckcustomerComponent implements OnInit {
    view: FormGroup;
    ssnId: number;
    cust: Customer;
    customerlist: Customer;
    msg: string;
    errormessage: string;

    constructor( private fb: FormBuilder, private service: CustomerServiceService ) { }


    ngOnInit() {
        //this.customerlist=null;
        this.view = this.fb.group( {
            ssnId: ['', [Validators.required, Validators.pattern( '^[0-9]{9}$' )]]
        } );
    }
    onSubmit() {
        this.cust = this.view.value;
        this.ssnId = this.cust.ssnId;
        this.service.viewDetailsBySSN( this.ssnId ).subscribe(( data ) => { this.customerlist = data;  this.errormessage=null; }, ( error ) => {
            this.errormessage = error;
            this.customerlist = null;
        } );


    }




}

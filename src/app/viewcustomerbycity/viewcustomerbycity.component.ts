import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";

@Component({
  selector: 'app-viewcustomerbycity',
  templateUrl: './viewcustomerbycity.component.html',
  styleUrls: ['./viewcustomerbycity.component.css']
})
export class ViewcustomerbycityComponent implements OnInit {
    errormessage: string;
    view:FormGroup;
city:string;
customerlist:Customer[];
msg:string;

constructor(private fb:FormBuilder, private service:CustomerServiceService) { }


ngOnInit() {
    this.view=this.fb.group({
        city:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]]
    });
}
onSubmit(){
    this.city=this.view.value.city;
    this.service.viewDetailsByCity(this.city).subscribe(( data ) => { this.customerlist = data;  this.errormessage=null; }, ( error ) => {
        this.errormessage = error;
        this.customerlist = null;
    } );
}





}

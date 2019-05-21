import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Customer } from '../bean/customer';
import { CustomerServiceService } from "app/customerService/customer-service.service";



@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
    register:FormGroup;
    customer: Customer;
    message:string;
errormessage:string;


  constructor(private fb:FormBuilder, private service:CustomerServiceService) { }

  ngOnInit() {
      
      this.register=this.fb.group({
          ssnId:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
          customerName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          age:['',[Validators.required,Validators.maxLength(2),Validators.pattern('^[0-9]+$')]],
          address:['',[Validators.required,Validators.pattern('^[0-9a-zA-Z ]+$')]],
          city:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          state:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          email:['',[Validators.required,Validators.email]],
          contactNo:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
      });
  }
  
  onSubmit(){
     // console.log(this.register.value);
      this.customer=this.register.value;
     this.service.registerCustomer(this.customer).subscribe((data)=>{
         this.message='Customer with customerId:'+data.customerId+ ' registered successfully!';
         this.errormessage=null;
         } ,
         (error)=>{
      this.errormessage = error;
      this.message=null;
  });
     
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
    errormessage: string;

    ssnId: number;
    customer: Customer;
    message: string;
    register: FormGroup;

  constructor(private service:CustomerServiceService ,   private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit() {
      this.ssnId = this.route.snapshot.params['ssnId'];
      
      this.register=this.fb.group({
          ssnId:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
          customerId:['',Validators.required],
          customerName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          age:['',[Validators.required,Validators.maxLength(3),Validators.pattern('^[0-9]+$')]],
          address:['',[Validators.required,Validators.pattern('^[0-9a-zA-Z ]+$')]],
          city:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          state:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          email:['',Validators.required],
          contactNo:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
      });
      
      
      //console.log("test: "+this.ssn);
      this.service.viewDetailsBySSN(this.ssnId).subscribe((data)=>{this.customer=data;console.log(this.customer)});
     
      
  }
  
  onupdate(){
      this.customer=this.register.value;
      console.log("sdfsdf");
      console.log(this.customer);

      this.service.updateCustomer(this.customer).subscribe((data)=>{this.message='customer successfully updated ';
      this.errormessage=null;
      } ,
      (error)=>{
   this.errormessage = error;
   this.message=null;
});
  
}

}
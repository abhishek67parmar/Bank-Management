import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { Customer } from "app/bean/customer";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
    customerlist: Customer;

    ssn:number;
flag: boolean;
message : string;

  constructor(private service:CustomerServiceService ,   private route: ActivatedRoute) { }

  ngOnInit() {
      this.ssn = this.route.snapshot.params['ssnId'];
      
      
      this.service.viewDetailsBySSN( this.ssn ).subscribe(( data ) => { this.customerlist = data;this.service.deleteCustomer(this.customerlist).subscribe((data)=>{this.flag=data;});});
  }

}

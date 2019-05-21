import { Component, OnInit } from '@angular/core';
import { Customer } from "app/bean/customer";
import { CustomerServiceService } from "app/customerService/customer-service.service";

@Component({
  selector: 'app-view-all-customer',
  templateUrl: './view-all-customer.component.html',
  styleUrls: ['./view-all-customer.component.css']
})
export class ViewAllCustomerComponent implements OnInit {
    customers:Customer[];

    errormessage:string;

  constructor(private service:CustomerServiceService) { }

  ngOnInit() {
      this.service.viewall().subscribe((data)=>{
          this.customers = data;
          this.errormessage=null;
      },(error)=>{
          this.errormessage = error;
          this.customers=null;
      });

  }

}

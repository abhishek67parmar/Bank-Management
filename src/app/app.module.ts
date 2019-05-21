import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{RouterModule,Routes} from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { HttpModule } from '@angular/http';
import { CustomerServiceService } from "app/customerService/customer-service.service";
import { ViewAllCustomerComponent } from './view-all-customer/view-all-customer.component';
import { ViewcustomersbyssnIdComponent } from './viewcustomersbyssn-id/viewcustomersbyssn-id.component';
import { ViewcustomerbyemailComponent } from './viewcustomerbyemail/viewcustomerbyemail.component';
import { ViewcustomerbycityComponent } from './viewcustomerbycity/viewcustomerbycity.component';
import { ViewcustomerbycontactnoComponent } from './viewcustomerbycontactno/viewcustomerbycontactno.component';
import { CheckcustomerComponent } from './checkcustomer/checkcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { AccountServiceService } from "app/accountService/account-service.service";
import { ViewAccountByIdComponent } from './view-account-by-id/view-account-by-id.component';
import { ViewAccountByCustomerComponent } from './view-account-by-customer/view-account-by-customer.component';
import { ViewAllAccountComponent } from './view-all-account/view-all-account.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';

export const routes:Routes=[ {path: '', component:HomeComponent},
                            {path:"customer",component:CustomerRegistrationComponent},
                            {path:"viewall",component:ViewAllCustomerComponent},
                            {path:"viewbyssn",component:ViewcustomersbyssnIdComponent },
                            {path:"viewbyemail",component: ViewcustomerbyemailComponent},
                            {path:"viewbycity",component: ViewcustomerbycityComponent},
                            {path:"viewbycontactno",component:ViewcustomerbycontactnoComponent  },
                            {path:"updatecustomer/:ssnId", component:UpdatecustomerComponent},
                            {path:"deletecustomer/:ssnId", component:DeleteCustomerComponent},
                            {path:"checkcustomer",component:CheckcustomerComponent },
                            {path:"account" ,component: AccountRegistrationComponent},
                            {path:"byaccid",component:ViewAccountByIdComponent},
                            {path:"bycustid", component:ViewAccountByCustomerComponent},
                            {path:"allacc", component:ViewAllAccountComponent}
                            ];


@NgModule({
   declarations: [ 
      AppComponent,
      HomeComponent,
      CustomerRegistrationComponent,
      CustomerHeaderComponent,
      ViewAllCustomerComponent,
      ViewcustomersbyssnIdComponent,
      ViewcustomerbyemailComponent,
      ViewcustomerbycityComponent,
      ViewcustomerbycontactnoComponent,
      CheckcustomerComponent,
      UpdatecustomerComponent,
      DeleteCustomerComponent,
      AccountRegistrationComponent,
      ViewAccountByIdComponent,
      ViewAccountByCustomerComponent,
      ViewAllAccountComponent,
      CustomerFooterComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   ],
   providers: [CustomerServiceService,AccountServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

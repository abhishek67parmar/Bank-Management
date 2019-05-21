import { Injectable } from '@angular/core';
import { Customer } from '../bean/customer';
import { Http, Response } from '@angular/http';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';





@Injectable()
export class CustomerServiceService {

   
    
  constructor(private http: Http) { }
  
  registerCustomer(customer:Customer):Observable<Customer>{
      
     return  this.http.post('http://localhost:8080/addCustomer',customer).pipe(map((resp)=>{
         return this.handle(resp);
         }),catchError((error) =>{
             return Observable.throw("Error in registration");
         })); 
  }
  
  updateCustomer(customer:Customer):Observable<Customer>{
      return  this.http.put('http://localhost:8080/updateCustomer',customer).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
              return Observable.throw("Error in updatation");
          }));
  }
  
  deleteCustomer(cust:Customer):Observable<boolean>{
      return  this.http.put('http://localhost:8080/deleteCustomer',cust).pipe(map((resp)=>{
          return this.handle(resp);
          }));
  }
  
  viewDetailsBySSN(ssnId:number): Observable<Customer>{
      return  this.http.get('http://localhost:8080/viewBySSN/'+ssnId).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
          
              
          return Observable.throw("Error");
      })); 
  }

  viewDetailsByEmail(email:string):Observable<Customer>{
      return  this.http.get('http://localhost:8080/viewBycustomerEmail/'+email).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
          
          return Observable.throw("Error");
      })); 
  }
  
  
  viewDetailsByCity(city:string):Observable<Customer[]>{
      return  this.http.get('http://localhost:8080/viewBycustomerCity/'+city).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
          
          return Observable.throw("Error");
      })); 
  }
  
  viewDetailsByContactNo(contactNo:number):Observable<Customer>{
      return  this.http.get('http://localhost:8080/viewBycustomerContactNo/'+contactNo).pipe(map((resp)=>{
          return this.handle(resp);
}),catchError((error)=>{
          
          return Observable.throw("Error");
          })); 
  }
  
   
  
  viewall():Observable<Customer[]>{
     return  this.http.get('http://localhost:8080/viewCustomers').pipe(map((resp)=>{
          
          return this.handle(resp);
          
          
      }),catchError((error)=>{
              
          return Observable.throw("Server Communication Failed");
      }));

      

  }
  
  
  
  
  handle(resp:Response|any){
      if(resp instanceof Response){
          return resp.json();
      }
      else{
          return resp;
      }
  }
  
  

}

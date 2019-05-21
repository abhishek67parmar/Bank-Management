import { Injectable } from '@angular/core';
import { Account } from '../bean/account';
import { Http, Response } from '@angular/http';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AccountServiceService {
    

  constructor(private http: Http) { }
  
  
  registerAccount(account:Account):Observable<number>{
      
      return  this.http.post('http://localhost:8080/addAccount',account).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
              return Observable.throw("Error in registration");
          })); 
   }
  
  
  
  viewDetailsByAccId(accId:number): Observable<Account>{
      return  this.http.get('http://localhost:8080/viewAccountByAccountId/'+accId).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
          
     
          return Observable.throw("Error");
      })); 
  }
  
  
  viewDetailsByCustId(custId:number): Observable<Account>{
      return  this.http.get('http://localhost:8080/viewAccountsByCustomerId/'+custId).pipe(map((resp)=>{
          return this.handle(resp);
          }),catchError((error)=>{
          
              
          return Observable.throw("Error");
      })); 
  }
  
  
  
  
  
  viewall():Observable<Account[]>{
      return  this.http.get('http://localhost:8080/viewAllAccounts').pipe(map((resp)=>{
           
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

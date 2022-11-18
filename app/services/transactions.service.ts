import { Injectable, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Observable, retry, tap } from 'rxjs';
import { IDataObject } from './../models/data-object';
import { ITransaction } from './../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

constructor(private http:HttpClient) { 
}

getAll():Observable<IDataObject>{
 return this.http.get<IDataObject>("../../assets/myJson.json");
}

}

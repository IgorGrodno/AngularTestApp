import { Component, Input, OnInit } from '@angular/core';
import { ITransactionsByType } from 'src/app/models/transactions-by-type';
import { TransactionsService } from './../../services/transactions.service';
import { ITransaction } from './../../models/transaction';
import { Observable } from 'rxjs';
import { IDataObject } from './../../models/data-object';
import { PropertyRead } from '@angular/compiler';
import { TransactionCountByTypePipe } from 'src/app/pipes/transaction-count-by-type.pipe';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit{
  
  dataObject:IDataObject={
    total: 0,
    data: []
  };
  
  constructor(private transactionService:TransactionsService){
  }
  ngOnInit(){
    this.transactionService.getAll().subscribe({next:(data: IDataObject) => {
      this.dataObject=data;   
    }});
   }
}

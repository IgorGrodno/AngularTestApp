import { Component, OnInit } from '@angular/core';
import { IDataObject } from 'src/app/models/data-object';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

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

import { Pipe, PipeTransform } from '@angular/core';
import { ITransactionsByType } from '../models/transactions-by-type';
import { ITransaction } from './../models/transaction';

@Pipe({
  name: 'transactionCountByType'
})
export class TransactionCountByTypePipe implements PipeTransform {

  transform(transactions:ITransaction[]): ITransactionsByType[] {
    let result:ITransactionsByType[]=[];
    transactions.forEach(element=>
      {
        let index=result.findIndex(resultElement => resultElement.type === element.type);     
        if(index===-1){
          result.push({
            type:element.type,
            transactionCount:1
          });
        }
        else{
          result[index].transactionCount++;
        }
      });     
    return result;
  }

}

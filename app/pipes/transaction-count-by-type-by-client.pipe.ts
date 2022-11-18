import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../models/transaction';
import { ITransactionByTyByClient } from '../models/transaction-by-ty-by-client';

@Pipe({
  name: 'transactionCountByTypeByClient'
})
export class TransactionCountByTypeByClientPipe implements PipeTransform {

  transform(transactions:ITransaction[]): ITransactionByTyByClient[] {
    let result:ITransactionByTyByClient[]=[];
    transactions.forEach(element=>
      {
        let index=result.findIndex(resultElement => resultElement.type === element.type);     
        if(index===-1){
          result.push({
            type:element.type,            
              clients:[
                {
                 name: {
                first:element.name.first,
                last:element.name.last
              },
              transactionsCount:1
            }],
            id:result.length
        });
        }
        else{
         let clientIndex = result[index].clients.findIndex(client=>(client.name.first===element.name.first && client.name.last === element.name.last));
         if(clientIndex===-1)
         {
          result[index].clients.push(
            {
              name:{
                first:element.name.first,
                last:element.name.last
              },
              transactionsCount:1
            }
          );
         }
         else{
          result[index].clients[clientIndex].transactionsCount++;
         }
        }
      });
    return result;
  }
}

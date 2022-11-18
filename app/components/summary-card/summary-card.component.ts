import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})

export class SummaryCardComponent { 
  @Input()
  transactionType!:any;
  @Input()
  transactionCount!:number;  
}
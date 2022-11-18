import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-main-card',
  templateUrl: './summary-main-card.component.html',
  styleUrls: ['./summary-main-card.component.css']
})
export class SummaryMainCardComponent{

  @Input()
  transactionTotalCount!:any;  
}

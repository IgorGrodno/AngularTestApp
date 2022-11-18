import { Component, Input, OnInit } from '@angular/core';
import { ITransactionByTyByClient } from 'src/app/models/transaction-by-ty-by-client';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent{
 
  @Input()
  tabsData!:ITransactionByTyByClient[]   

}



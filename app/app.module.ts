import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { SummaryMainCardComponent } from './components/summary-main-card/summary-main-card.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TransactionCountByTypePipe } from './pipes/transaction-count-by-type.pipe';
import { TabComponent } from './components/tab/tab.component';
import { TransactionCountByTypeByClientPipe } from './pipes/transaction-count-by-type-by-client.pipe';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryCardComponent,
    SummaryMainCardComponent,
    SummaryPageComponent,
    ListPageComponent,
    TransactionCountByTypePipe,
    TabComponent,
    TransactionCountByTypeByClientPipe,
    ClientsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AsyncPipe,
    CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

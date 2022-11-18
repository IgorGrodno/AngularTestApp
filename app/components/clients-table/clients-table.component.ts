import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from './../../models/client';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

@Input()
clients:IClient[]| undefined;
@Input()
id:number | undefined;

show=true;

  constructor(private route: ActivatedRoute)   { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['tab']==this.id)
      {
        this.show=true;
      }
      else{
        this.show=false;
      }
    }
  );
  }  
}


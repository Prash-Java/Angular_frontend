import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  // Create list of Sales Persons
  salesPersonList: SalesPerson[]=[
    new SalesPerson("Sachin","Tendulkar","sachin.tendulkar@gmail.com",90000),
    new SalesPerson("Lionel","Messi","lionel.messi@google.com",80000),
    new SalesPerson("Virat","Kohli","virat.kohli@gmail.com",80000),
    new SalesPerson("Roger","Federer","roger.federer@gmail.com",70000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

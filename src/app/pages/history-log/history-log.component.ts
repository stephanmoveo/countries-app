import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-log',
  templateUrl: './history-log.component.html',
  styleUrls: ['./history-log.component.scss']
})
export class HistoryLogComponent implements OnInit {

  constructor() { }

  columnsToDisplay = ['userName', 'age'];

  logsArr = JSON.parse(localStorage.getItem("logs") as any) 

  ngOnInit(): void {
  }

}

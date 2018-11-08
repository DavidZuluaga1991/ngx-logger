import { Component, OnInit } from '@angular/core';
import { LoggersService } from './_service/loggers.service';

@Component({
  selector: 'app-loggers',
  templateUrl: './loggers.component.html',
  styleUrls: ['./loggers.component.css'],
  providers:[LoggersService]
})
export class LoggersComponent implements OnInit {

  select: string[] = ["Customer","Auto"];
  selected: string;
  constructor(private servi: LoggersService) { 
    this.selected = "Customer";
    //this.loggers.getLogger();
  }

  ngOnInit() {
  }

  selectEvent(){
    //this.selected = selected;
    this.servi.getLogger();
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6-component2',
  templateUrl: './scenario6-component2.component.html',
  styleUrls: ['./scenario6-component2.component.css']
})
export class Scenario6Component2Component implements OnInit {
  @Output() public childEvent=new EventEmitter();

  fireEvent()
  {
    this.childEvent.emit("Data from child");
  }

  constructor() { }

  ngOnInit() {
  }

}

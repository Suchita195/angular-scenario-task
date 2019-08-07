import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component2',
  templateUrl: './scenario5-component2.component.html',
  styleUrls: ['./scenario5-component2.component.css']
})
export class Scenario5Component2Component implements OnInit {
  @Output() public newEvent=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public onEvent(value){
    this.newEvent.emit(value);
  }

}

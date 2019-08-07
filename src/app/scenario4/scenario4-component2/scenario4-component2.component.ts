import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-component2',
  templateUrl: './scenario4-component2.component.html',
  styleUrls: ['./scenario4-component2.component.css']
})
export class Scenario4Component2Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public successClass="text-success";
  fireEvent()
  {
    this.childEvent.emit("My name is Suchita");
  }

}

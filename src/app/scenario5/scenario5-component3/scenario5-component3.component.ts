import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component3',
  templateUrl: './scenario5-component3.component.html',
  styleUrls: ['./scenario5-component3.component.css']
})
export class Scenario5Component3Component implements OnInit {

  @Output() public childEvent=new EventEmitter();
  
  public fireEvent()
  {
    this.childEvent.emit("I live in Lucknow")
  }
  constructor() { }

  ngOnInit() {
  }

}

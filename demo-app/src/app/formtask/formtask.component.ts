import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent implements OnInit {
  artifact: string=""
  constructor() { }

  ngOnInit(): void {
  }

}
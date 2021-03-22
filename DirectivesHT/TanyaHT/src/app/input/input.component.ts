import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  public mine: string = 'C7C7C7';

  constructor() { }

  ngOnInit(): void {
  }

}

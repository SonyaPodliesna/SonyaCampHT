import { Component, OnInit } from '@angular/core';
import { UserInputService } from 'src/app/user-input.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  public outputData: string;

  constructor(private readonly service: UserInputService) { }

  ngOnInit(): void {
    this.service.userData$.subscribe( value => {
      this.outputData = value;
    });
  }

}

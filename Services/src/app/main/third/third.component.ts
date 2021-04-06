import { Component, OnInit } from '@angular/core';
import { UserInputService } from 'src/app/user-input.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  public outputData: string;

  constructor(private readonly service: UserInputService) { }

  ngOnInit(): void {
    this.service.userData$.subscribe( value => {
      this.outputData = value;
    });
  }

}

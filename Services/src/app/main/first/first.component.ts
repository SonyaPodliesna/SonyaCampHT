import { Component, OnInit } from '@angular/core';
import { UserInputService } from 'src/app/user-input.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public outputData: string;

  constructor(private readonly service: UserInputService) { }

  ngOnInit(): void {
    this.service.userData$.subscribe( value => {
      this.outputData = value;
    });
  }

}

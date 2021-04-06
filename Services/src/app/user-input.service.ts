import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {
  public userData$ = new BehaviorSubject<string>(null);

  constructor() { }
}

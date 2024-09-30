import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  @Output() showCartDialog$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  toggleCartDialog(toogle: boolean) {
    this.showCartDialog$.emit(toogle);
  }
}

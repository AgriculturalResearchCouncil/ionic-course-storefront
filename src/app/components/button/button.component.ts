import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() data?: any;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  onClick(event: any) {
    this.clicked.emit(event);
  }
}

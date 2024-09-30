import { Component, Input } from '@angular/core';
import { Rating } from '../../interfaces/rating';

@Component({
  selector: 'app-rating',
  standalone: false,
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() data?: Rating;
}

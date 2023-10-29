import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  public gifts:Gif[] = [];

}

import { Component } from '@angular/core';
import { GiftService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private giftsService :GiftService){}

  get gifts():Gif[]{
    return this.giftsService.gifList
  }
}

import { Component,Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-gifts-card',
  templateUrl: './gifts-card.component.html',
  styleUrls: ['./gifts-card.component.css']
})
export class GiftsCardComponent implements OnInit {
  
  @Input()
  public gif!:Gif;

  ngOnInit(): void {
    if(!this.gif) return;
  }
}

import { Component } from '@angular/core';
import { GiftService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private gifsService:GiftService){
   
  }


  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string):void{
    this.gifsService.searchTag(tag)

  }
}

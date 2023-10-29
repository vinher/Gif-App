import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../../services/gifts.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('textTagInput') //Es Solo uno y toma como refenrencia todos lo elementos de un html
  public tagInput!:ElementRef<HTMLInputElement>;
  
  constructor(private giftService:GiftService){}
  
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.giftService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }


  //Ejemplo Con ID
  // searchTag(newTag:String){
  //   console.log({newTag})
  // }

  

  



}

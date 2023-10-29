import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GiftsCardComponent } from './components/gifts-card/gifts-card.component';
import { LazyImageComponent } from '../shared/components/lazy-image/lazy-image.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardListComponent,
    GiftsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    //
    HomeComponent,

  ]
})
export class GiftsModule { }

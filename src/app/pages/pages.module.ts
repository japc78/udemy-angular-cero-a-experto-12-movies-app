import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FindComponent } from './find/find.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    FindComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

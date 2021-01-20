import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FindComponent } from './find/find.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }

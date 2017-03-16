import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoursesComponent } from './courses.component';
import { AutoGrowDirective } from './auto-grow.directive';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                  AppComponent,
                  CoursesComponent,
                  AutoGrowDirective,

                  NavbarComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

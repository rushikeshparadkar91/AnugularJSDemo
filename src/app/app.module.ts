import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what do i need 
  declarations: [ AppComponent ], // what things do i need in my app
  bootstrap:    [ AppComponent ] // where do i start ? 
})
export class AppModule { }

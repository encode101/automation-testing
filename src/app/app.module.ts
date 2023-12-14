import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MultiSelectDropDownModule } from 'multi-select-drop-down';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MultiSelectDropDownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

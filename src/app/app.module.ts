import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MentorComponent } from './mentor/mentor.component';
import { AngularMaterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [AppComponent, MentorComponent],
  imports: [BrowserModule, HttpClientModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyleAttributeComponent } from './ngstyle-attribute/ngstyle-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
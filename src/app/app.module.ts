import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
   AboutComponent,
   ContactComponent,
   HomeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

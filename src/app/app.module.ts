@@ -3,11 +3,18 @@ import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
	NavbarComponent
   AppComponent,
   NavbarComponent,
   AboutComponent,
   ContactComponent,
   HomeComponent

  ],
  imports: [

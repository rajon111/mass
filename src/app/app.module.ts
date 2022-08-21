import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/Header/header/header.component';
import { FooterComponent } from './layout/Footer/footer/footer.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { HomeMainComponent } from './pages/Home/home-main/home-main.component';
import { HomeSectionOneComponent } from './pages/Home/home-section-one/home-section-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeMainComponent,
    HomeSectionOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

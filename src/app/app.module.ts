import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { cartReducer } from './reducer/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    ProductCardComponent,
    RatingComponent,
    ButtonComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer }),
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookService } from './service/service.component';
import { BooklistComponent } from './homepage/booklist/booklist.component';
import { WishlistComponent } from './homepage/wishlist/wishlist.component';
import { SearchComponent } from './homepage/search/search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';

import { AppRoutingModule } from  './app-routing.module';
import { HeaderComponent } from './homepage/header/header.component'

export const baseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    WishlistComponent,
    SearchComponent,
    HomepageComponent,
    WishlistPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [
    BookService,
    {provide: baseUrl, useValue: 'https://www.googleapis.com/books/v1/volumes?q='}],
  bootstrap: [AppComponent]
})
export class AppModule { }

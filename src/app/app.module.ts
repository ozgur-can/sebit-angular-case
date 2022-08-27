import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { PostDetailPageComponent } from './pages/post-details-page/post-detail-page.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoriesPageComponent,
    PostDetailPageComponent,
    SearchResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

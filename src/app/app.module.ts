import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonSearchComponent } from './components/common-search/common-search.component';
import { BaseService } from './shared/services/base.service';
import { PostService } from './shared/services/post-service';
import { HttpClientModule } from '@angular/common/http';
import { ShortenPipe } from './shared/pipes/shorten.pipe';

@NgModule({
  declarations: [AppComponent, CommonSearchComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [BaseService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}

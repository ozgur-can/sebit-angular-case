import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CategoryPageComponent } from '../pages/categories-page/category-page.component';
import { PostDetailPageComponent } from '../pages/post-details-page/post-detail-page.component';
import { SearchResultPageComponent } from '../pages/search-result-page/search-result-page.component';
import { HomeCardComponent } from '../components/home-card/home-card.component';
import { PostCardComponent } from '../components/post-card/post-card.component';
import { SearchCardComponent } from '../components/search-card/search-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoryPageComponent,
    PostDetailPageComponent,
    SearchResultPageComponent,
    HomeCardComponent,
    PostCardComponent,
    SearchCardComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}

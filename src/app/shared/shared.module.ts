import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CategoryPageComponent } from '../pages/categories-page/category-page.component';
import { PostDetailPageComponent } from '../pages/post-details-page/post-detail-page.component';
import { SearchResultPageComponent } from '../pages/search-result-page/search-result-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoryPageComponent,
    PostDetailPageComponent,
    SearchResultPageComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}

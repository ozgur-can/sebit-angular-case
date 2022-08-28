import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/categories-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostDetailPageComponent } from './pages/post-details-page/post-detail-page.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'category/:id',
    component: CategoryPageComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailPageComponent,
  },
  {
    path: 'search/:text',
    component: SearchResultPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

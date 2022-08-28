import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss'],
})
export class PostDetailPageComponent implements OnInit {
  id: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get category id
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}

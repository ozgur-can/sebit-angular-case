import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/types';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['../../../styles/components.scss'],
})
export class SearchCardComponent implements OnInit {
  @Input() post?: IPost = undefined;
  constructor() {}

  ngOnInit(): void {}
}

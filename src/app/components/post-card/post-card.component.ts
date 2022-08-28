import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['../../../styles/components.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post?: IPost = undefined;
  tagButtons: string[] = ['foo', 'bar', 'baz'];
  constructor() {}

  ngOnInit(): void {}
}

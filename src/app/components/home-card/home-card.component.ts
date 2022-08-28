import { Component, Input, OnInit } from '@angular/core';
import { ITopic } from 'src/app/shared/types';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['../../../styles/components.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() topic?: ITopic = undefined;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['../../../styles/components.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() topicIcon: string = '';
  @Input() topicTitle: string = '';
  @Input() topicDescription: string = '';
  constructor() {}

  ngOnInit(): void {}
}

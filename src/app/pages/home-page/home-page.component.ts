import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITopic } from 'src/app/shared/types';
import topicsJSON from '../../../assets/data/topics.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  topics: ITopic[] = topicsJSON.topics;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}

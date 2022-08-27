import { Component, OnInit } from '@angular/core';
import { ITopic } from 'src/app/shared/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  topics: ITopic[] = [
    {
      icon: 'cog',
      title: 'Getting Started',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'users',
      title: 'User Account',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'settings',
      title: 'Product Features',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'code',
      title: 'Customization Options',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'credit-card',
      title: 'Payment Gateways',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'lock',
      title: 'Security Options',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'download',
      title: 'Digital Downloads',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      icon: 'mail',
      title: 'Email Marketing',
      description:
        'Get started fast with installation and theme setup instructions',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

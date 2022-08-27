import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITopic } from 'src/app/shared/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  topics: ITopic[] = [
    {
      id: 1,
      icon: 'cog',
      title: 'Getting Started',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 2,
      icon: 'users',
      title: 'User Account',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 3,
      icon: 'settings',
      title: 'Product Features',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 4,
      icon: 'code',
      title: 'Customization Options',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 5,
      icon: 'credit-card',
      title: 'Payment Gateways',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 6,
      icon: 'lock',
      title: 'Security Options',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 7,
      icon: 'download',
      title: 'Digital Downloads',
      description:
        'Get started fast with installation and theme setup instructions',
    },
    {
      id: 8,
      icon: 'mail',
      title: 'Email Marketing',
      description:
        'Get started fast with installation and theme setup instructions',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
}

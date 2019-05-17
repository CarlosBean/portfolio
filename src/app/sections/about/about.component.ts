import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sharedElements: any[] = [
    {
      url: 'https://github.com/',
      path: 'carlosbean',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'carlos-benavides-de-la-cruz-21180b149',

      icon: 'fab fa-linkedin'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { route: 'about', name: 'Información' },
    { route: 'experience', name: 'Experiencia' },
    { route: 'education', name: 'Educación' },
    { route: 'skills', name: 'Habilidades' },
    { route: 'interests', name: 'Intereses' },
    /* { route: 'projects', name: 'Proyectos' }, */
  ];

  constructor() { }

  ngOnInit() {
  }

}

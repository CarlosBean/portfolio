import { Component, OnInit } from '@angular/core';
import { LanguageConfigService } from 'src/app/services/language-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { route: 'about', name: 'menu.about' },
    { route: 'experience', name: 'menu.experience' },
    { route: 'education', name: 'menu.education' },
    { route: 'skills', name: 'menu.skills' },
    { route: 'interests', name: 'menu.interests' },
    /* { route: 'projects', name: 'Proyectos' }, */
  ];

  activeLanguage: string;

  constructor(private languageConfigService: LanguageConfigService) { }

  ngOnInit() {
    this.activeLanguage = this.languageConfigService.getLanguage();
  }

  changeLanguage(lang: string) {
    this.activeLanguage = lang;
    this.languageConfigService.change(lang);
  }
}

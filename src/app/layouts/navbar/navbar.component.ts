import { Component, OnInit } from '@angular/core';
import { LanguageConfigService } from 'src/app/services/language-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { route: 'about', name: 'main.about' },
    { route: 'experience', name: 'main.experience' },
    { route: 'education', name: 'main.education' },
    { route: 'skills', name: 'main.skills' },
    { route: 'interests', name: 'main.interests' },
    /* { route: 'projects', name: 'Proyectos' }, */
  ];

  activeLanguage: string;

  constructor(private languageConfigService: LanguageConfigService) { }

  ngOnInit() {
    this.activeLanguage = this.languageConfigService.getLanguage();
  }

  changeLanguage() {
    this.activeLanguage = this.activeLanguage === 'es' ? 'en' : 'es';
    this.languageConfigService.change(this.activeLanguage);
  }
}

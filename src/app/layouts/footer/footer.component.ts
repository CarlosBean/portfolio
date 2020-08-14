import { Component, OnInit } from '@angular/core';
import { LanguageConfigService } from 'src/app/services/language-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu = [
    { route: 'about', name: 'main.about', icon: 'fas fa-user' },
    { route: 'experience', name: 'main.experience', icon: 'fas fa-briefcase' },
    { route: 'education', name: 'main.education', icon: 'fas fa-graduation-cap' },
    { route: 'skills', name: 'Skills', icon: 'fas fa-meteor' },
    { route: 'interests', name: 'main.interests', icon: 'fas fa-shapes' }
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

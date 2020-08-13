import { Component, OnInit } from "@angular/core";
import { CurriculumPDFService } from 'src/app/services/curriculumPDF.service';


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {

  curriculum: any;
  sharedElements: any[] = [
    {
      url: "https://github.com/",
      path: "carlosbean",
      icon: "fab fa-github"
    },
    {
      url: "https://www.linkedin.com/in/",
      path: "cbenavides",
      icon: "fab fa-linkedin"
    }
  ];

  constructor(public pdfService: CurriculumPDFService) { }

  createPDF() {
    this.pdfService.createPDF();
  }

  ngOnInit() { }
}

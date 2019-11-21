import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}

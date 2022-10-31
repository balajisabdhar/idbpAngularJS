import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-template',
  templateUrl: './page-title-template.component.html',
  styleUrls: ['./page-title-template.component.scss']
})
export class PageTitleTemplateComponent implements OnInit {

  @Input() public pagetitle: any;
  constructor() { }

  ngOnInit(): void {
  }

}

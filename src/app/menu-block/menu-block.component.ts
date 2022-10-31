import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss']
})
export class MenuBlockComponent implements OnInit {

  @Input() public tileName: any;
  @Input() public tileDescription: any;
  @Input() public tileLink: any;

  constructor() { }

  ngOnInit(): void {
  }

}

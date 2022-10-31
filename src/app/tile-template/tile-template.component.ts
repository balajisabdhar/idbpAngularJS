import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-template',
  templateUrl: './tile-template.component.html',
  styleUrls: ['./tile-template.component.scss']
})
export class TileTemplateComponent implements OnInit {

  @Input() public tileName: any;
  @Input() public tileLink: any;
  @Input() public tileIcon: any;
  constructor() { }

  ngOnInit(): void {
  }

}

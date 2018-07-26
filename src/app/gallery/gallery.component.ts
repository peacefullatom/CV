import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  title = "gallery";
  folded = "false";

  list = ["binary clock", "tree of life"];
  selection = 0;

  constructor() { }

  select = (item: number) => this.selection = item

  ngOnInit() {
  }

}

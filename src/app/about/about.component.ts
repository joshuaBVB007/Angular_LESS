import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  x:any;
  @ViewChild("lista") mylista: ElementRef | any;

  constructor() { }
  ngOnInit(): void {
  }
  fill(){
    var i;
    this.x = this.mylista?.nativeElement.childNodes;
    for (i = 0; i < 3; i++) {
      this.x[i].style.display="none";  
    }
  }
  showDivs() {
    this.x[0].style.display="block"
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  opened = false;

  ngOnInit() {

  }

  resizeNav(opened: boolean) {
    console.log(opened);
    this.opened = opened;
  }
}

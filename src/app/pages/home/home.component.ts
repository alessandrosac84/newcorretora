import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened = false;

  ngOnInit() {

  }

  resizeNav(opened: boolean) {
    console.log(opened);
    this.opened = opened;
  }
}

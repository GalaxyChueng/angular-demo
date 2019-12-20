import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <div><a [routerLink]="['']">home page</a></div>
    <div><a [routerLink]="['/test']">test page</a></div>
    <router-outlet></router-outlet>
  `,
})

export class PagesComponent implements OnInit, OnDestroy, AfterViewInit {
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}

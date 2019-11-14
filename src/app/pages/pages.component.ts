import { Component } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <a [routerLink]="['/home']">111</a>
    <a (click)="handleClick()">222</a>
    <router-outlet></router-outlet>
  `,
})

export class PagesComponent {
  handleClick() {
    console.log(111);
  }
}

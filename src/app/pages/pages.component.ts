import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <nz-menux [menus]="menus" [mode]="mode"></nz-menux>
    <router-outlet></router-outlet>
  `,
})

export class PagesComponent implements OnInit, OnDestroy, AfterViewInit {
  public mode = 'horizontal';
  public menus: object[] = [{
      level: 1,
      title: '首页',
      path: '/',
      open: true,
      icon: 'mail',
      disabled: false,
    },
    {
      level: 1,
      title: '测试',
      path: '/test',
      open: true,
      icon: 'mail',
      disabled: false,
    },
  ];

   public ngOnInit() {
  }

   public ngAfterViewInit() {
  }

   public ngOnDestroy() {
  }
}

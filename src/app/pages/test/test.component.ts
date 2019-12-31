import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
})

export class TestComponent implements OnInit, OnDestroy, AfterViewInit {
  public openMenu: object[] = [{
      level: 1,
      title: 'es6测试',
      path: './es6',
      open: true,
      icon: 'mail',
      selected: true,
      disabled: false,
    },
    {
      level: 1,
      title: 'ts测试',
      path: './ts',
      open: true,
      icon: 'mail',
      selected: false,
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

import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {decoratorTest as decorator} from './ts-test/decorator';
import currying from './es6-test/currying';

@Component({
  selector: 'ngx-home',
  templateUrl: './test.component.html',
})

export class TestComponent implements OnInit, OnDestroy, AfterViewInit {
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  decoratorTest() {
    decorator();
  }

  curryingTest() {
    currying();
  }

  ngOnDestroy() {
  }
}

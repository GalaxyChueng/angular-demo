import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import currying from './currying';

@Component({
  selector: 'ngx-es6',
  templateUrl: './es6-test.component.html',
})

export class Es6TestComponent implements OnInit, OnDestroy, AfterViewInit {
   public ngOnInit() {
  }

   public ngAfterViewInit() {
  }

   public curryingTest() {
    currying();
  }

   public ngOnDestroy() {
  }
}

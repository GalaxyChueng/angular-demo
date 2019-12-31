import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {decoratorTest as decorator} from './decorator';

@Component({
  selector: 'ngx-ts',
  templateUrl: './ts-test.component.html',
})

export class TsTestComponent implements OnInit, OnDestroy, AfterViewInit {
   public ngOnInit() {
  }

   public ngAfterViewInit() {
  }

   public decoratorTest() {
    decorator();
  }

   public ngOnDestroy() {
  }
}

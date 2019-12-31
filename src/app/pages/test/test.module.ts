import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { TsTestComponent } from './ts-test/ts-test.component';
import { Es6TestComponent } from './es6-test/es6-test.component';

@NgModule({
  declarations: [
    TestComponent,
    TsTestComponent,
    Es6TestComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class TestModule {
}

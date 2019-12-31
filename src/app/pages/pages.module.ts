import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TestModule } from './test/test.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzMenuxComponent } from '../@theme/components/nz-menux.component';

@NgModule({
  declarations: [
    PagesComponent,
    NzMenuxComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    PagesRoutingModule,
    TestModule,
  ],
})
export class PagesModule {
}

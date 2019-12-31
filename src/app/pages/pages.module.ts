import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TestModule } from './test/test.module';

import { NzMenuxComponent } from '../@theme/components/nz-menux.component';

@NgModule({
  declarations: [
    PagesComponent,
    NzMenuxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    TestModule,
  ],
})
export class PagesModule {
}

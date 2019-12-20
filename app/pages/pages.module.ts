import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    TestComponent
  ],
})
export class PagesModule {
}

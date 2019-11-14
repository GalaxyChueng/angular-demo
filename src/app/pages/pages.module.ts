import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent
  ],
})
export class PagesModule {
}

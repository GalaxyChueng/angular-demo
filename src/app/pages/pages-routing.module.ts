import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TestComponent } from './test/test.component';
import { TsTestComponent } from './test/ts-test/ts-test.component';
import { Es6TestComponent } from './test/es6-test/es6-test.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
        children: [
          {
            path: 'ts',
            component: TsTestComponent,
          },
          {
            path: 'es6',
            component: Es6TestComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

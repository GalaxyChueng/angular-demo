import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  }
];

const config: ExtraOptions = {
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

// 配置 angular i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    // 导入 ng-zorro-antd 模块
    NgZorroAntdModule,
    PagesModule,
  ],
  bootstrap: [ AppComponent ],
  // 配置 ng-zorro-antd 国际化（文案 及 日期）
  providers   : [
  { provide: NZ_I18N, useValue: zh_CN },
],
})
export class AppModule { }

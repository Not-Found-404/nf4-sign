import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandComponent } from './brand/brand.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    // AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

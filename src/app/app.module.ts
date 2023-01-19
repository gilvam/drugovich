import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { BodyModule } from './core/components/body/body.module';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const maskConfig: Partial<IConfig> = {
  dropSpecialCharacters: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    BodyModule,
  ],
  providers: [provideEnvironmentNgxMask(maskConfig)],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FrontPageComponent } from './front-page/front-page.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FrontPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

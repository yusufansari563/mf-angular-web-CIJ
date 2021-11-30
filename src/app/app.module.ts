import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { ImhQuestionComponent } from './imh-question/imh-question.component';

const routes: Routes = [
  { path: 'home', component: ImhQuestionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'acknowledge', component: AcknowledgmentComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AcknowledgmentComponent, ImhQuestionComponent],
  exports: [RouterTestingModule],
  // entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterTestingModule.withRoutes(routes),
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, {
      injector,
    });
    customElements.define('component-imh', el);
  }
  ngDoBootstrap() {}
}

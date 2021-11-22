import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, NewsComponent],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector: this.injector });
    customElements.define('imh-question', el);
    //  to create custom ui injector element of perticular coomponent below code we can refer
    // const question = createCustomElement(QuestionComponent, { injector });
    // customElements.define('imh-question', question);
  }
  ngDoBootstrap() { }
}

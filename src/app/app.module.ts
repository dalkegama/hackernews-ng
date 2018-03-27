import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item/itemComments/itemComments.component';

import { HackerNewsApiService } from './services/hackernews-api.service';
import { DomainPipe } from './custom/domain.pipe';
import { routing } from './routes.routing';
@NgModule({
  declarations: [
    AppComponent,
    DomainPipe,
    HeaderComponent,
    ItemComponent,
    ItemCommentsComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    routing
  ],
  providers: [
    HackerNewsApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

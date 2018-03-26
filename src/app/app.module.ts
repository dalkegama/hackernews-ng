import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsApiService } from './services/hackernews-api.service';
import { DomainPipe } from './custom/domain.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DomainPipe,
    HeaderComponent,
    ItemComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    NgbModule.forRoot()
  ],
  providers: [
    HackerNewsApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

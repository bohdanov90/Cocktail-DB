import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectComponent } from './components/project/project.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { ContentHeadingComponent } from './components/content-heading/content-heading.component';
import { ContentItemComponent } from './components/content-item/content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    FilterItemComponent,
    FilterButtonComponent,
    ContentHeadingComponent,
    ContentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

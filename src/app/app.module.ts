import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectComponent } from './components/project/project.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { ContentHeadingComponent } from './components/content-heading/content-heading.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    FilterItemComponent,
    ContentHeadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    FilterItemComponent,
    ContentHeadingComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

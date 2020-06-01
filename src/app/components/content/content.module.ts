import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  exports: [
    ContentComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ContentModule { }

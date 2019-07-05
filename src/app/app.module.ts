import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListComponent} from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { DialogComponent } from './list/dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { SearchPipe } from './shared/search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DialogComponent,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

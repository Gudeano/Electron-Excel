import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExcelGeneratorComponent } from './components/excel-generator/excel-generator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ExcelGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    ExcelGeneratorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
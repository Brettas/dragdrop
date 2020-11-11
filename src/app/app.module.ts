import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { DatatableDragdropComponent } from './datatable-dragdrop/datatable-dragdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableDragdropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    NgbModule, 
    NgxDatatableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

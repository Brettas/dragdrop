import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { CdktabelaComponent } from './cdktabela/cdktabela.component';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    CdktabelaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule,
    NgbModule, 
    NgxDatatableModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule
    
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorComponent}],
  bootstrap: [AppComponent]
})
export class AppModule { }

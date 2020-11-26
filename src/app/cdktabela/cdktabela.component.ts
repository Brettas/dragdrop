import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cdktabela',
  templateUrl: './cdktabela.component.html',
  styleUrls: ['./cdktabela.component.css']
})
export class CdktabelaComponent implements AfterViewInit {

  columns: string[] = ['gender', 'name', 'company',  ];

  coluna: string[] = ['state', 'skills',];
  
  dataSource = new MatTableDataSource(dadosTabela);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  name: string;
  gender: string;
  company: string;
  skills: string;
  state: string;
}

const dadosTabela: PeriodicElement[] = [
  { name: 'Pedro', gender: 'M', company: 'Apple', skills: 'Python', state: 'RJ' },
  { name: 'Bruno', gender: 'M', company: 'KFC', skills: ' TS', state: 'SP' },
  { name: 'Lorena', gender: 'F', company: 'Coca-Cola', skills: 'JS', state: 'BA' },
  { name: 'Leandro', gender: 'M', company: 'Burger King', skills: 'C#', state: 'AM' },
  { name: 'Amanda', gender: 'F', company: 'UX', skills: 'Java', state: 'CE' }
];


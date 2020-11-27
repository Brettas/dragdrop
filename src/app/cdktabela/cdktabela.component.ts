import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cdktabela',
  templateUrl: './cdktabela.component.html',
  styleUrls: ['./cdktabela.component.css']
})
export class CdktabelaComponent implements AfterViewInit  {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  columns: string[] = ['gender', 'name', 'company',  ];

  coluna: string[] = ['state', 'skills','id',];

  
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
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  gender: string;
  company: string;
  skills: string;
  state: string;
  id: number;
}

const dadosTabela: PeriodicElement[] = [
  { name: 'Pedro', gender: 'M', company: 'Apple', skills: 'Python', state: 'RJ', id: 1  },
  { name: 'Bruno', gender: 'M', company: 'KFC', skills: ' TS', state: 'SP', id: 2   },
  { name: 'Lorena', gender: 'F', company: 'Coca-Cola', skills: 'JS', state: 'BA',  id: 3 },
  { name: 'Leandro', gender: 'M', company: 'Burger King', skills: 'C#', state: 'AM', id: 4  },
  { name: 'Amanda', gender: 'F', company: 'UX', skills: 'Java', state: 'CE', id: 5 },
  { name: 'Camila', gender: 'F', company: 'Shell', skills: 'JS', state: 'BA',  id: 6 },
  { name: 'Thais', gender: 'F', company: 'Globo', skills: 'C#', state: 'AM', id: 7   },
  { name: 'Lucas', gender: 'M', company: 'B2W', skills: 'Java', state: 'CE', id: 8  },
  { name: 'Diego', gender: 'M', company: 'ESPN', skills: 'NBA', state: 'RJ',  id: 9 },
  { name: 'Renata', gender: 'F', company: 'Bg', skills: 'C#', state: 'AM', id: 10 },
  { name: 'Isadora', gender: 'F', company: 'CA', skills: 'Java', state: 'CE', id: 11 }
];


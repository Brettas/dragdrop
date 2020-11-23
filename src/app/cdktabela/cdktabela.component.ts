import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdktabela',
  templateUrl: './cdktabela.component.html',
  styleUrls: ['./cdktabela.component.css']
})
export class CdktabelaComponent {
  columns: string[] = ['gender', 'name', 'company', 'skills', 'state'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}

export interface PeriodicElement {
  name: string;
  gender: string;
  company: string;
  skills: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Pedro', gender: 'M', company: 'Apple', skills: 'Python', state: 'RJ' },
  { name: 'Bruno', gender: 'M', company: 'KFC', skills: ' TS', state: 'SP' },
  { name: 'Lorena', gender: 'F', company: 'Coca-Cola', skills: 'JS', state: 'BA' },
  { name: 'Leandro', gender: 'M', company: 'Burger King', skills: 'C#', state: 'AM' },
  { name: 'Amanda', gender: 'F', company: 'UX', skills: 'Java', state: 'CE' }
];


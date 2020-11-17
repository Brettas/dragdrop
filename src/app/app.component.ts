import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  ]
})
export class AppComponent {

  title = 'app';
  loadingIndicator = true;
  reorderable = true;
  swapColumns = false;
  ColumnMode = ColumnMode;

  dadosTabela = [
    { name: 'Pedro', gender: 'M', company: 'Apple', skills: 'Python', state: 'RJ' },
    { name: 'Bruno', gender: 'M', company: 'KFC', skills: ' TS', state: 'SP' },
    { name: 'Lorena', gender: 'F', company: 'Coca-Cola', skills: 'JS', state: 'BA' },
    { name: 'Leandro', gender: 'M', company: 'Burger King', skills: 'C#', state: 'AM' },
    { name: 'Amanda', gender: 'F', company: 'UX', skills: 'Java', state: 'CE' }
  ];
  columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];
  colunasLivres = [{ name: 'Skills' }, { name: 'State' }];


  


  drop(event: CdkDragDrop<{ name: string, gender: string, company: string, state: string, skills: string }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dadosTabela = [...this.dadosTabela];
      this.columns = [...this.columns];
      this.colunasLivres = [...this.colunasLivres];
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dadosTabela = [...this.dadosTabela];
      this.columns = [...this.columns];
      this.colunasLivres = [...this.colunasLivres];
    }
  }
  

}

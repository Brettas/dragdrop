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
    { name: 'Austin', gender: 'Male', company: 'Swimlane', },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', }
  ];
  columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];


  skillsColumns = [{ name: 'Skill' }];

  skills = [
  { skills: 'Python' },
  { skills: 'JS' },
  { skills: 'TS' },
  ]







  drop(event: CdkDragDrop<{ name: string, gender: string, company: string, id: string }[]>) {
    if (event.previousContainer === event.container) {
      console.log('No mesmo bloco', moveItemInArray);
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dadosTabela = [...this.dadosTabela]
      this.columns = [...this.columns]
    } else {

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dadosTabela = [...this.dadosTabela]
      this.columns = [...this.columns]
      console.log('Em bloco diferente', transferArrayItem);

    }
  }

}

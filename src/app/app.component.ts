import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadingIndicator = true;
  reorderable = true;
  swapColumns = false;

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  
  rows1 = [
    { name: 'Alvaro', gender: 'Male', company: 'Bndes' },
    { name: 'Roberto', gender: 'Male', company: 'BB' },
    { name: 'Carlos', gender: 'Male', company: 'Caixa' },
    
  ];
  columns1 = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];



  

  drop(event: CdkDragDrop<{name: string, gender: string, company:string}[]>) {
    if (event.previousContainer === event.container) {
      console.log('No mesmo bloco',moveItemInArray);
      moveItemInArray(event.container.data,
                       event.previousIndex, 
                       event.currentIndex);
                       this.rows = [...this.rows]
                       this.rows1 = [...this.rows1]
    } else {
      
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.rows = [...this.rows]
                        this.rows1 = [...this.rows1]
                        console.log('Em bloco diferente', transferArrayItem);

    }
  }

}

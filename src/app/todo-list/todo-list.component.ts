import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnChanges {
  @Input() parentData: any;
  displayedColumns: string[] = ['sno', 'course', 'action'];
  dataSource: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentData'] && this.parentData) {
      this.dataSource.push({
        sno: this.dataSource.length + 1, 
        course: this.parentData
      });
    }
  }


  deleteCourse(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource]; // Refresh the table
  }
}

import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, TodoListComponent],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss'
})
export class TodoItemsComponent {
  sendDataToStore: any;
  constructor(private router: Router){}
  courseName: string = '';

  addCourse(id: string) {
    if(this.courseName) {
      this.sendDataToStore = this.courseName;
      this.courseName = '';
    }
    // this.router.navigate(['/course-details', id]);
  }
}

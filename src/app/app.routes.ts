import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'todoItems', component: TodoItemsComponent},
    {path:'', redirectTo:'login', pathMatch:'full'},
    { path: 'course-details/:id', component: TodoListComponent }

];

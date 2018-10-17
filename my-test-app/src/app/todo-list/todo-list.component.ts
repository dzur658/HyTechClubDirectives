import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
allTodos: Todo[] = [
  {description: 'Task1', complete: false, id: 1},
  {description: 'Task2', complete: true, id: 2},
  {description: 'Task3', complete: false, id: 3}
];
newTask = '';

clickAddTask() {
  //gets array length
  const currentLength = this.allTodos.length;

  this.allTodos.push(
    {description: this.newTask, complete: false, id: currentLength + 1}
  )
}

  constructor() { }

  ngOnInit() {
  }

}

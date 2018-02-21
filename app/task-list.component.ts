import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit</button></li>
  </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus', 3),
    new Task('Think about JavaScript group projects', 2),
    new Task('Add READMEs to old github repos', 2),
  ];

  isDone(clickedTask: Task){
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else{
      alert("This task is not done. Better get moving!")
    }
  }

  priorityColor(currentTask){
    if(currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask()">Edit</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Project';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus', 3),
    new Task('Think about JavaScript group projects', 2),
    new Task('Add READMEs to old github repos', 2),
  ];

  editTask(){
  alert("You just requested to edit a task!");
  }

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

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number){}
}

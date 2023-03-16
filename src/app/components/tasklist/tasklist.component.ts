import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interface/Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription()

  constructor (private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService
                          .onToggle()
                          .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => 
      this.tasks = this.tasks.filter((t) => 
        task.id !== t.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }

  addTask(task: Task) {
    console.log('Adding task', task)
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}

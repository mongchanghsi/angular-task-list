import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/interface/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title: string = '';
  description: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if (!this.title) {
      alert('Please add a Task title')
    }

    const newTask: Task = {
      title: this.title,
      description: this.description,
      day: this.day,
      reminder: this.reminder
    }

    // Send task
    this.onAddTask.emit(newTask);

    // Clear
    this.title = '';
    this.description = '';
    this.day = '';
    this.reminder = false;
  }
}

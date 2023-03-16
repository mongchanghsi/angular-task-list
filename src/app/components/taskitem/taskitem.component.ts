import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interface/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.scss']
})
export class TaskitemComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    day: '',
    reminder: false,
  }
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminderTask: EventEmitter<Task> = new EventEmitter()
  
  faTimes = faTimes;

  onDelete(task: Task) {
    console.log(`Deleting `, task)
    this.onDeleteTask.emit(task)
  }
  
  onToggleReminder(task: Task) {
    console.log("Toggling Reminder for", task)
    this.onToggleReminderTask.emit(task)
  }
}

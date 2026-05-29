import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <h2>Mis Pendientes</h2>
      
   <div *ngIf="tasks.length === 0" class="empty-state">

<div *ngIf="tasks.length === 0" class="empty-state">

      <div class="task-card" *ngFor="let task of tasks">
        <div class="task-info">
          <h3>{{ task.titulo }}</h3>
          <span class="badge">{{ task.materia }}</span>
        </div>
        <button class="delete-btn" (click)="eliminar(task.id)">Eliminar</button>
      </div>
    </div>
  `,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  eliminar(id: number) {
    this.taskService.deleteTask(id);
  }
}
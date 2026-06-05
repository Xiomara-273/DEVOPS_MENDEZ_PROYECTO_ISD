import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Añadir Nueva Tarea</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="input-group">
          <label>Nombre de la Tarea</label>
          <input type="text" [(ngModel)]="titulo" name="titulo" placeholder="Ej. Terminar el laboratorio..." required>
        </div>
        
        <div class="input-group">
          <label>Materia</label>
          <input type="text" [(ngModel)]="materia" name="materia" placeholder="Ej. Desarrollo de Software" required>
        </div>

        <button type="submit" class="neon-btn">Agregar Tarea</button>
      </form>
    </div>
  `,
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  titulo = '';
  materia = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.titulo.trim() && this.materia.trim()) {
      this.taskService.addTask(this.titulo, this.materia);
      this.titulo = '';
      this.materia = '';
    }
  }
}
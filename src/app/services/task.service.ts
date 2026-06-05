import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Al iniciar, revisamos si ya había tareas guardadas en el navegador
    const saved = localStorage.getItem('tasks');
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  }

  // Retorna la lista actual de tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agrega una nueva tarea con ID único basado en el tiempo actual
  addTask(titulo: string, materia: string) {
    const newTask: Task = {
      id: Date.now(),
      titulo,
      materia,
      completada: false
    };
    this.tasks.push(newTask);
    this.saveToLocalStorage();
  }

  // Elimina una tarea buscando su ID
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  // Guarda el estado actual en el localStorage
  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
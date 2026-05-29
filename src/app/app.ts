import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  template: `
    <div class="main-layout">
      <header>
        <h1>Academic <span class="neon-text">TaskTracker</span></h1>
        <p>Gestor de actividades modulares • 5B DS</p>
      </header>
      
      <main class="dashboard-grid">
        <app-task-form></app-task-form>
        <app-task-list></app-task-list>
      </main>
    </div>
  `,
  styles: [`
    .main-layout {
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
      color: #fff;
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: 40px 20px;
    }

    header {
      text-align: center;
      margin-bottom: 40px;
    }

    header h1 {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 800;
    }

    .neon-text {
      background: linear-gradient(45deg, #00f2fe, #f857a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    header p {
      color: #94a3b8;
      margin: 5px 0 0 0;
    }

    .dashboard-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 30px;
    }

    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AppComponent {}
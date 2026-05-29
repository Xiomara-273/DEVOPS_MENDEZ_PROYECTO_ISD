import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService (Pruebas Unitarias)', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
    localStorage.clear(); // Limpiamos la memoria antes de correr cada prueba
  });

  it('debería crearse el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería agregar una nueva tarea a la lista', () => {
    // 1. Estado inicial: la lista debe empezar vacía (0 elementos)
    expect(service.getTasks().length).toBe(0);

    // 2. Acción: Agregamos una tarea simulada
    service.addTask('Avanzar el laboratorio', 'Aplicaciones Híbridas');

    // 3. Verificación: Comprobamos que ahora hay un elemento y contiene los datos correctos
    const lista = service.getTasks();
    expect(lista.length).toBe(1);
    expect(lista[0].titulo).toBe('Avanzar el laboratorio');
    expect(lista[0].materia).toBe('Aplicaciones Híbridas');
  });
});
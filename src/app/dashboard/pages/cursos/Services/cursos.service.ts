import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Curso } from '../cursos.component';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos$ = new BehaviorSubject<Curso[]>([
    {
      id: 1,
      nombreCurso: 'Angular',
      fechaInicio: new Date('01/01/2023'),
      fechaFin: new Date('03/03/2023'),
    },
    {
      id: 2,
      nombreCurso: 'Data Analytics',
      fechaInicio: new Date('01/01/2023'),
      fechaFin: new Date('03/03/2023'),
    },
    {
      id: 3,
      nombreCurso: 'Data Scientist',
      fechaInicio: new Date('01/01/2023'),
      fechaFin: new Date('03/03/2023'),
    },
    {
      id: 4,
      nombreCurso: 'Desarrollo Frontend React',
      fechaInicio: new Date('03/03/2023'),
      fechaFin: new Date('06/06/2023'),
    },
    {
      id: 5,
      nombreCurso: 'Desarrollo UX/UI',
      fechaInicio: new Date('03/03/2023'),
      fechaFin: new Date('06/06/2023'),
    },
    {
      id: 6,
      nombreCurso: 'Diseño UX Research',
      fechaInicio: new Date('03/03/2023'),
      fechaFin: new Date('06/06/2023'),
    },
    {
      id: 7,
      nombreCurso: 'Java script',
      fechaInicio: new Date('06/06/2023'),
      fechaFin: new Date('09/09/2023'),
    },
    {
      id: 8,
      nombreCurso: 'Marketing Digital',
      fechaInicio: new Date('06/06/2023'),
      fechaFin: new Date('09/09/2023'),
    },
    {
      id: 9,
      nombreCurso: 'Product Design',
      fechaInicio: new Date('06/06/2023'),
      fechaFin: new Date('09/09/2023'),
    },
    {
      id: 10,
      nombreCurso: 'Product Web',
      fechaInicio: new Date('09/09/2023'),
      fechaFin: new Date('12/12/2023'),
    },
    {
      id: 11,
      nombreCurso: 'Programación WEB',
      fechaInicio: new Date('09/09/2023'),
      fechaFin: new Date('12/12/2023'),
    },
  ]);
  constructor() {}

  obtenerCurso(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  obtenerCursoPorId(id: number): Observable<Curso | undefined> {
    return this.cursos$
      .asObservable()
      .pipe(map((cursos) => cursos.find((a) => a.id === id)));
  }
}

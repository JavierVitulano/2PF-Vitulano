import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
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

  eliminarCurso(cursoAEliminar: Curso) {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        const calumnosActualizados = cursos.filter(
          (curso) => curso.id != cursoAEliminar.id
        );
        this.cursos$.next(calumnosActualizados);
      },
    });
  }
  crearCurso(nuevoCurso: Curso) {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        this.cursos$.next([
          {
            id: cursos.length + 1,
            nombreCurso: nuevoCurso.nombreCurso,
            fechaInicio: nuevoCurso.fechaInicio,
            fechaFin: nuevoCurso.fechaFin,
          },
          ...cursos,
        ]);
      },
      complete: () => {},
      error: () => {},
    });
  }
  editarCurso(
    cursoId: number,
    actualizacion: Partial<Curso>
  ): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.map((curso) => {
          if (curso.id === cursoId) {
            return {
              ...curso,
              ...actualizacion,
            };
          } else {
            return curso;
          }
        });

        this.cursos$.next(cursosActualizados);
      },
    });
    return this.cursos$.asObservable();
  }
}

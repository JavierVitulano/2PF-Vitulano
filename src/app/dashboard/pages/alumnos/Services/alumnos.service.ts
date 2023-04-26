import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Alumno } from '../alumnos.component';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private estudiantes$ = new BehaviorSubject<Alumno[]>([
    {
      nombre: 'Camila',
      apellido: 'Alonso',
      email: 'Camila.Alonso@gmail.com',
      numeroDocumento: 28250309,
      fechaDeAlta: new Date('01/04/2023'),
    },
    {
      nombre: 'Alejandro',
      apellido: 'Álvarez',
      email: 'Alejandro.Alvarez@gmail.com',
      numeroDocumento: 27250311,
      fechaDeAlta: new Date('01/01/2023'),
    },
    {
      nombre: 'Nadia',
      apellido: 'Díaz',
      email: 'Nadia.Diaz@gmail.com',
      numeroDocumento: 27250314,
      fechaDeAlta: new Date('01/03/2023'),
    },
    {
      nombre: 'Elvira',
      apellido: 'Fernández',
      email: 'Elvira.Fernandez@gmail.com',
      numeroDocumento: 29250304,
      fechaDeAlta: new Date('01/02/2023'),
    },
    {
      nombre: 'Maximiliano',
      apellido: 'García',
      email: 'Maximiliano.Garcia@gmail.com',
      numeroDocumento: 29250302,
      fechaDeAlta: new Date('01/04/2023'),
    },
    {
      nombre: 'Manuel',
      apellido: 'González',
      email: 'Manuel.Gonzalez@gmail.com',
      numeroDocumento: 29250303,
      fechaDeAlta: new Date('01/04/2023'),
    },
    {
      nombre: 'Javier',
      apellido: 'Hernández',
      email: 'Javier.Hernandez@gmail.com',
      numeroDocumento: 27250310,
      fechaDeAlta: new Date('01/03/2023'),
    },
    {
      nombre: 'Yesica',
      apellido: 'López',
      email: 'Yesica.Lopez@gmail.com',
      numeroDocumento: 28250305,
      fechaDeAlta: new Date('01/03/2023'),
    },
    {
      nombre: 'Mariela',
      apellido: 'Martínez',
      email: 'Mariela.Martinez@gmail.com',
      numeroDocumento: 28250306,
      fechaDeAlta: new Date('01/03/2023'),
    },
    {
      nombre: 'Darío',
      apellido: 'Moreno',
      email: 'Dario.Moreno@gmail.com',
      numeroDocumento: 27250313,
      fechaDeAlta: new Date('01/02/2023'),
    },
    {
      nombre: 'Nicolas',
      apellido: 'Muñoz',
      email: 'Nicolas.Munoz@gmail.com',
      numeroDocumento: 27250312,
      fechaDeAlta: new Date('01/02/2023'),
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'Juan.Perez@gmail.com',
      numeroDocumento: 29250301,
      fechaDeAlta: new Date('01/02/2023'),
    },
    {
      nombre: 'Micaela',
      apellido: 'Romero',
      email: 'Micaela.Romero@gmail.com',
      numeroDocumento: 28250308,
      fechaDeAlta: new Date('01/01/2023'),
    },
    {
      nombre: 'Fernando',
      apellido: 'Ruiz',
      email: 'Fernando.Ruiz@gmail.com',
      numeroDocumento: 27250315,
      fechaDeAlta: new Date('01/01/2023'),
    },
    {
      nombre: 'Lara',
      apellido: 'Sánchez',
      email: 'Lara.Sanchez@gmail.com',
      numeroDocumento: 28250307,
      fechaDeAlta: new Date('01/01/2023'),
    },
  ]);
  constructor() {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(numeroDocumento: number): Observable<Alumno | undefined> {
    return this.estudiantes$
      .asObservable()
      .pipe(
        map((alumnos) =>
          alumnos.find((a) => a.numeroDocumento === numeroDocumento)
        )
      );
  }

  crearAlumno(nuevoAlumno: Alumno) {
    this.estudiantes$.pipe(take(1)).subscribe({
      next: (alumnos) => {
        this.estudiantes$.next([nuevoAlumno, ...alumnos]);
      },
    });
  }

  eliminarAlumno(alumnoAEliminar: Alumno) {
    this.estudiantes$.pipe(take(1)).subscribe({
      next: (alumnos) => {
        const calumnosActualizados = alumnos.filter(
          (alumno) => alumno.numeroDocumento !== alumnoAEliminar.numeroDocumento
        );
        this.estudiantes$.next(calumnosActualizados);
      },
    });
  }
  editarAlumno(
    alumnoId: number,
    actualizacion: Partial<Alumno>
  ): Observable<Alumno[]> {
    this.estudiantes$.pipe(take(1)).subscribe({
      next: (alumnos) => {
        const alumnoActualizados = alumnos.map((alumno) => {
          if (alumno.numeroDocumento === alumnoId) {
            return {
              ...alumno,
              ...actualizacion,
            };
          } else {
            return alumno;
          }
        });

        this.estudiantes$.next(alumnoActualizados);
      },
    });
    return this.estudiantes$.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { Inscripcion } from '../inscripciones.component';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  private inscripcion$ = new BehaviorSubject<Inscripcion[]>([
    {
      idCurso: 1,
      nombreCurso: 'Angular',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Camila',
      apellidoAlumno: 'Alonso',
      emailAlumno: 'Camila.Alonso@gmail.com',
      numeroDocumentoAlumno: 28250309,
    },
    {
      idCurso: 2,
      nombreCurso: 'Data Analytics',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Alejandro',
      apellidoAlumno: 'Álvarez',
      emailAlumno: 'Alejandro.Álvarez@gmail.com',
      numeroDocumentoAlumno: 27250311,
    },
    {
      idCurso: 3,
      nombreCurso: 'Data Scientist',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Nadia',
      apellidoAlumno: 'Díaz',
      emailAlumno: 'Nadia.Díaz@gmail.com',
      numeroDocumentoAlumno: 27250314,
    },
    {
      idCurso: 4,
      nombreCurso: 'Desarrollo Frontend React',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Elvira',
      apellidoAlumno: 'Fernández',
      emailAlumno: 'Elvira.Fernández@gmail.com',
      numeroDocumentoAlumno: 29250304,
    },
    {
      idCurso: 5,
      nombreCurso: 'Desarrollo UX/UI',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Maximiliano',
      apellidoAlumno: 'García',
      emailAlumno: 'Maximiliano.García@gmail.com',
      numeroDocumentoAlumno: 29250302,
    },
    {
      idCurso: 6,
      nombreCurso: 'Diseño UX Research',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Manuel',
      apellidoAlumno: 'González',
      emailAlumno: 'Manuel.González@gmail.com',
      numeroDocumentoAlumno: 29250303,
    },
    {
      idCurso: 7,
      nombreCurso: 'Java script',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Javier',
      apellidoAlumno: 'Hernández',
      emailAlumno: 'Javier.Hernández@gmail.com',
      numeroDocumentoAlumno: 27250310,
    },
    {
      idCurso: 8,
      nombreCurso: 'Marketing Digital',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Yesica',
      apellidoAlumno: 'López',
      emailAlumno: 'Yesica.López@gmail.com',
      numeroDocumentoAlumno: 28250305,
    },
    {
      idCurso: 9,
      nombreCurso: 'Product Design',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Mariela',
      apellidoAlumno: 'Martínez',
      emailAlumno: 'Mariela.Martínez@gmail.com',
      numeroDocumentoAlumno: 28250306,
    },
    {
      idCurso: 10,
      nombreCurso: 'Product Web',
      fechaInicioCurso: new Date('09/09/2023'),
      fechaFinCurso: new Date('12/12/2023'),
      nombreAlumno: 'Darío',
      apellidoAlumno: 'Moreno',
      emailAlumno: 'Darío.Moreno@gmail.com',
      numeroDocumentoAlumno: 27250313,
    },
    {
      idCurso: 11,
      nombreCurso: 'Programación WEB',
      fechaInicioCurso: new Date('09/09/2023'),
      fechaFinCurso: new Date('12/12/2023'),
      nombreAlumno: 'Nicolas',
      apellidoAlumno: 'Muñoz',
      emailAlumno: 'Nicolas.Muñoz@gmail.com',
      numeroDocumentoAlumno: 27250312,
    },

    {
      idCurso: 5,
      nombreCurso: 'Desarrollo UX/UI',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Camila',
      apellidoAlumno: 'Alonso',
      emailAlumno: 'Camila.Alonso@gmail.com',
      numeroDocumentoAlumno: 28250309,
    },
    {
      idCurso: 11,
      nombreCurso: 'Programación WEB',
      fechaInicioCurso: new Date('09/09/2023'),
      fechaFinCurso: new Date('12/12/2023'),
      nombreAlumno: 'Alejandro',
      apellidoAlumno: 'Álvarez',
      emailAlumno: 'Alejandro.Álvarez@gmail.com',
      numeroDocumentoAlumno: 27250311,
    },
    {
      idCurso: 10,
      nombreCurso: 'Product Web',
      fechaInicioCurso: new Date('09/09/2023'),
      fechaFinCurso: new Date('12/12/2023'),
      nombreAlumno: 'Nadia',
      apellidoAlumno: 'Díaz',
      emailAlumno: 'Nadia.Díaz@gmail.com',
      numeroDocumentoAlumno: 27250314,
    },
    {
      idCurso: 9,
      nombreCurso: 'Product Design',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Elvira',
      apellidoAlumno: 'Fernández',
      emailAlumno: 'Elvira.Fernández@gmail.com',
      numeroDocumentoAlumno: 29250304,
    },
    {
      idCurso: 8,
      nombreCurso: 'Marketing Digital',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Maximiliano',
      apellidoAlumno: 'García',
      emailAlumno: 'Maximiliano.García@gmail.com',
      numeroDocumentoAlumno: 29250302,
    },
    {
      idCurso: 7,
      nombreCurso: 'Java script',
      fechaInicioCurso: new Date('06/06/2023'),
      fechaFinCurso: new Date('09/09/2023'),
      nombreAlumno: 'Manuel',
      apellidoAlumno: 'González',
      emailAlumno: 'Manuel.González@gmail.com',
      numeroDocumentoAlumno: 29250303,
    },
    {
      idCurso: 5,
      nombreCurso: 'Desarrollo UX/UI',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Javier',
      apellidoAlumno: 'Hernández',
      emailAlumno: 'Javier.Hernández@gmail.com',
      numeroDocumentoAlumno: 27250310,
    },
    {
      idCurso: 4,
      nombreCurso: 'Desarrollo Frontend React',
      fechaInicioCurso: new Date('03/03/2023'),
      fechaFinCurso: new Date('06/06/2023'),
      nombreAlumno: 'Yesica',
      apellidoAlumno: 'López',
      emailAlumno: 'Yesica.López@gmail.com',
      numeroDocumentoAlumno: 28250305,
    },
    {
      idCurso: 3,
      nombreCurso: 'Data Scientist',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Mariela',
      apellidoAlumno: 'Martínez',
      emailAlumno: 'Mariela.Martínez@gmail.com',
      numeroDocumentoAlumno: 28250306,
    },
    {
      idCurso: 2,
      nombreCurso: 'Data Analytics',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Darío',
      apellidoAlumno: 'Moreno',
      emailAlumno: 'Darío.Moreno@gmail.com',
      numeroDocumentoAlumno: 27250313,
    },
    {
      idCurso: 1,
      nombreCurso: 'Angular',
      fechaInicioCurso: new Date('01/01/2023'),
      fechaFinCurso: new Date('03/03/2023'),
      nombreAlumno: 'Nicolas',
      apellidoAlumno: 'Muñoz',
      emailAlumno: 'Nicolas.Muñoz@gmail.com',
      numeroDocumentoAlumno: 27250312,
    },
  ]);
  constructor() {}

  obtenerInscripcion(): Observable<Inscripcion[]> {
    return this.inscripcion$.asObservable();
  }

  obtenerAlumnosPorCurso(idCurso: number): Observable<Inscripcion[]> {
    // return this.inscripcion$.asObservable()
    // .pipe(
    //   map((inscripcion) => inscripcion.find((c) => c.idCurso === idCurso))
    // )

    return this.obtenerAlumnos();
  }

  obtenerAlumnos(): Observable<Inscripcion[]> {
    return this.inscripcion$.asObservable();
  }

  obtenerCursosDeAlumno(nroDocumento: number): Observable<Inscripcion[]> {
    //  const v_resultado= this.inscripcion$.asObservable()
    //   .pipe(
    //     map((inscripcion) => inscripcion.find((a) => a.numeroDocumentoAlumno === nroDocumento))
    //   )
    //     if ( v_resultado != undefined)
    //     {
    //       return v_resultado;
    //     }
    //     else
    //     {return this.obtenerAlumnos()}
    return this.obtenerAlumnos();
    //inscripciones.
    //return this.cursosService.obtenerCursoPorId('1');
  }
  inscribirAlumno(nuevaInscripcion: Inscripcion) {
    this.inscripcion$.pipe(take(1)).subscribe({
      next: (inscripciones) => {
        this.inscripcion$.next([nuevaInscripcion, ...inscripciones]);
      },
    });
  }

  eliminarInscripcion(inscripcionAEliminar: Inscripcion) {
    this.inscripcion$.pipe(take(1)).subscribe({
      next: (alumnos) => {
        const calumnosActualizados = alumnos.filter(
          (inscripcion) =>
            inscripcion.numeroDocumentoAlumno !=
              inscripcionAEliminar.numeroDocumentoAlumno &&
            inscripcion.idCurso != inscripcionAEliminar.idCurso
        );
        this.inscripcion$.next(calumnosActualizados);
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(correo: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/estudiantes/v1/login`, { correo, contraseña }).pipe(
      map(response => response)
    );
  }

  // Método para agregar respuestas
  agregarRespuestas(id_estudiante: number, id_test: number, respuestas: any[]): Observable<any> {
    return this.http.post(`${this.BASE_URL}/respuestas/v1/agregar`, { id_estudiante, id_test, respuestas }).pipe(
      map(response => response)
    );
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'https://neurohealth-backend-deploy-baguceg4gbe4d4ac.canadacentral-01.azurewebsites.net/examen';

  constructor(private http: HttpClient) {}

  /**
   * Envía un nuevo examen al backend.
   * @param usuarioId ID del usuario
   * @param description Descripción del examen
   * @param name Nombre del examen
   * @param result Resultado del examen
   */
  aniadirExamen(usuarioId: string, description: string, name: string, result: string): Observable<any> {
    const body = {
      usuarioId,
      description,
      name,
      result
    };
    return this.http.post(`${this.apiUrl}/aniadir`, body);
  }

  /**
   * Obtiene todos los exámenes del usuario por su ID.
   * @param usuarioId ID del usuario
   */
  obtenerExamenes(usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${usuarioId}`);
  }
}

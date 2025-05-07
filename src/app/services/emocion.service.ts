import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmocionService {
  private apiUrl = 'https://neurohealth-backend-deploy-baguceg4gbe4d4ac.canadacentral-01.azurewebsites.net//diario';

  constructor(private http: HttpClient) {}

  /**
   * Añade una nueva entrada al diario emocional del usuario.
   * @param usuarioId ID del usuario
   * @param contenido Contenido del diario
   * @param emocion Emoción asociada
   */
  aniadirEntrada(usuarioId: string, contenido: string, emocion: string): Observable<any> {
    const body = {
      usuarioId,
      contenido,
      emocion
    };
    return this.http.post(`${this.apiUrl}/aniadir`, body);
  }

  /**
   * Obtiene todas las entradas del diario emocional de un usuario.
   * @param usuarioId ID del usuario
   */
  obtenerDiario(usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${usuarioId}`);
  }
}

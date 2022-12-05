import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { Project } from './Project';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'https://dotrest.azurewebsites.net/api/Projects';

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      )
  }

  constructor(
    private http: HttpClient,
  ) { }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    console.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}
}

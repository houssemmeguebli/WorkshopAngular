import { Injectable } from '@angular/core';
import { Universite } from "../_models/universityModel";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {
  private baseUrl = `http://localhost:8088/api/univeristes`;

  constructor(private http: HttpClient) {}

  // Get all universities
  retrieveAllUniversities(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/retrieveAllUniversities`).pipe(
      catchError(error => {
        console.error('Error retrieving universities:', error);
        return throwError(error);
      })
    );
  }

  // Add a university
  addUniversity(university: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.baseUrl}/addUniversity`, university).pipe(
      catchError(error => {
        console.error('Error adding university:', error);
        return throwError(error);
      })
    );
  }

  // Update a university
  updateUniversity(university: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/updateUniversity`, university).pipe(
      catchError(error => {
        console.error('Error updating university:', error);
        return throwError(error);
      })
    );
  }

  // Get a specific university by ID
  retrieveUniversity(idUniversity: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.baseUrl}/retrieveUniversity/${idUniversity}`).pipe(
      catchError(error => {
        console.error(`Error retrieving university with ID ${idUniversity}:`, error);
        return throwError(error);
      })
    );
  }

  // Affect a foyer to a university
  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/affecterFoyerAUniversite/${idFoyer}/${nomUniversite}`, {}).pipe(
      catchError(error => {
        console.error(`Error affecting foyer to university ${nomUniversite}:`, error);
        return throwError(error);
      })
    );
  }

  // Desaffect a foyer from a university
  desaffecterFoyerAUniversite(idUniversite: number): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/desaffecterFoyerAUniversite/${idUniversite}`, {}).pipe(
      catchError(error => {
        console.error(`Error desaffecting foyer from university ID ${idUniversite}:`, error);
        return throwError(error);
      })
    );
  }
}

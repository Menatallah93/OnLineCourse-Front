import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentLevel: string = "";

  constructor(private myhttp: HttpClient, private _Router: Router) { }

  selectedLevel(level : string): string{
    this.studentLevel = level;
      return this.studentLevel;
  }

  
}

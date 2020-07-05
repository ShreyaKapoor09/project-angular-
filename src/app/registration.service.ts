import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  getOptions() {
    return  [
      {"id": 1, "name": "India"},
      {"id": 2, "name": 'Dubai'},
      {"id": 3, "name": 'Indonesia'},
      {"id": 4, "name": 'Italy'},
      {"id": 5, "name": 'London'},
    ];
  }
}
